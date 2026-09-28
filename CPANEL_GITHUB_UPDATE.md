# cPanel GitHub update

The project now uses a standard React/Vite static build for cPanel. The relevant files are:

- `index.html`
- `src/main.tsx`
- `public/.htaccess`
- `vite.cpanel.config.ts`
- `package.json`

After pulling the update on cPanel, run:

```bash
npm ci
npm run build
```

The build writes a standard static React/Vite website to `dist/`. Upload the contents of `dist/`
to the cPanel document root (usually `public_html/`). The included `.htaccess` keeps direct page
URLs working with the client-side router. No Node.js startup file is needed for this static build.
