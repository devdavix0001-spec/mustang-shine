# Deploy the updated quote form to cPanel

This update moves the quote form to the first section after the contact-page hero. The deployment only needs the newly built HTML, JavaScript, CSS, and routing file. **Do not delete the existing image files.**

## Option 1: cPanel File Manager

1. Run the build locally:

   ```bash
   npm ci
   npm run build
   ```

2. In cPanel, open **File Manager** and go to your website document root, usually `public_html`.
3. Replace the existing root file with:

   ```text
   dist/index.html → public_html/index.html
   ```

4. Open `public_html/assets/` and replace the matching compiled files:

   ```text
   dist/assets/index-Bjavmqy0.js   → public_html/assets/index-Bjavmqy0.js
   dist/assets/styles-DHIjC214.css → public_html/assets/styles-DHIjC214.css
   ```

5. Upload or replace `dist/.htaccess` at `public_html/.htaccess`.
6. Leave all existing images in `public_html/assets/` unchanged.
7. Open the website in a private/incognito window and test `/contact`.

If the JavaScript or CSS filenames change after a future build, upload the new files and the new `index.html` together. The new `index.html` tells the browser which hashed filenames to load.

## Option 2: FTP with the deployment script

The repository includes:

```text
scripts/deploy-cpanel-ftp.sh
```

Install `lftp` once:

```bash
sudo apt-get update
sudo apt-get install -y lftp
```

Build the site:

```bash
npm ci
npm run build
```

Set your FTP details as environment variables. Do not place passwords directly in the script or commit them to Git:

```bash
export FTP_HOST="ftp.example.com"
export FTP_USER="your-cpanel-ftp-user"
export FTP_PASSWORD="your-ftp-password"
export FTP_REMOTE_DIR="/public_html"
# Set this only when your host requires explicit FTPS:
# export FTP_TLS=1
```

Run the deployment:

```bash
bash scripts/deploy-cpanel-ftp.sh
```

The script uploads only:

- `index.html`
- the current compiled JavaScript bundle
- the current compiled CSS bundle
- `.htaccess`

It does **not** remove or overwrite existing images.

### FTP path troubleshooting

- If the site is in an addon-domain folder, change `FTP_REMOTE_DIR`, for example `/public_html/example.com`.
- Some cPanel FTP accounts start inside their assigned folder; in that case use `FTP_REMOTE_DIR="/"` or the folder shown after login.
- If standard FTP fails, try `FTP_TLS=1` for explicit FTPS.
- Never send FTP passwords in chat or commit them to the repository.
