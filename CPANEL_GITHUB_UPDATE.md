# cPanel GitHub update

Copy the files in this update into the repository root and commit them to GitHub:

- `start.mjs`
- `vite.cpanel.config.ts`
- `package.json`
- `package-lock.json`

The files configure the cPanel Node.js application and repair the npm lockfile so `npm ci` works again.

After pulling the update on cPanel, run:

```bash
npm ci
npm run build:cpanel
```

Set the cPanel Node.js application startup file to `start.mjs`, then restart the application.
