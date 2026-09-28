#!/usr/bin/env bash
set -euo pipefail

# Upload the latest static Vite build to cPanel without touching existing images.
# Required environment variables:
#   FTP_HOST      FTP hostname, e.g. ftp.example.com
#   FTP_USER      cPanel FTP username
#   FTP_PASSWORD  cPanel FTP password
# Optional:
#   FTP_PORT      Defaults to 21
#   FTP_REMOTE_DIR Defaults to /public_html
#   FTP_TLS       Set to 1 to use explicit TLS/FTPS

: "${FTP_HOST:?Set FTP_HOST before running this script}"
: "${FTP_USER:?Set FTP_USER before running this script}"
: "${FTP_PASSWORD:?Set FTP_PASSWORD before running this script}"

FTP_PORT="${FTP_PORT:-21}"
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-/public_html}"
FTP_TLS="${FTP_TLS:-0}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"
INDEX_FILE="$DIST_DIR/index.html"
HTACCESS_FILE="$DIST_DIR/.htaccess"

mapfile -t JS_FILES < <(find "$DIST_DIR/assets" -maxdepth 1 -type f -name 'index-*.js' -print)
mapfile -t CSS_FILES < <(find "$DIST_DIR/assets" -maxdepth 1 -type f -name 'styles-*.css' -print)

if [[ "${#JS_FILES[@]}" -ne 1 || "${#CSS_FILES[@]}" -ne 1 ]]; then
  echo "Could not identify exactly one current Vite JavaScript and CSS bundle." >&2
  exit 1
fi

JS_FILE="${JS_FILES[0]}"
CSS_FILE="${CSS_FILES[0]}"

if [[ ! -f "$INDEX_FILE" || ! -f "$JS_FILE" || ! -f "$CSS_FILE" ]]; then
  echo "The expected dist files are missing. Run 'npm run build' first." >&2
  exit 1
fi

if ! command -v lftp >/dev/null 2>&1; then
  echo "lftp is required. Install it with: sudo apt-get install lftp" >&2
  exit 1
fi

if [[ "$FTP_TLS" == "1" ]]; then
  TLS_SETTINGS='set ftp:ssl-force true; set ftp:ssl-protect-data true; set ssl:verify-certificate no;'
else
  TLS_SETTINGS='set ftp:ssl-force false;'
fi

# The script uploads only the current HTML/CSS/JS and .htaccess. Existing image
# files in public_html/assets are intentionally left untouched.
lftp -u "$FTP_USER,$FTP_PASSWORD" -p "$FTP_PORT" "$FTP_HOST" <<EOF
$TLS_SETTINGS
set cmd:fail-exit yes
set net:max-retries 2
set net:timeout 20
mkdir -p "$FTP_REMOTE_DIR/assets"
cd "$FTP_REMOTE_DIR"
put "$INDEX_FILE" -o index.html
put "$JS_FILE" -o assets/$(basename "$JS_FILE")
put "$CSS_FILE" -o assets/$(basename "$CSS_FILE")
$(if [[ -f "$HTACCESS_FILE" ]]; then echo "put \"$HTACCESS_FILE\" -o .htaccess"; fi)
bye
EOF

echo "Deployment complete. Existing images were not modified."
