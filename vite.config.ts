import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

const mpaRoutesPlugin = (): Plugin => ({
  name: 'mpa-routes-rewriter',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const pathname = req.url ? req.url.split('?')[0].replace(/\/+$/, '') : '';
      if (pathname === '/lavado-muebles-armenia') {
        req.url = '/lavado-muebles-armenia/index.html' + (req.url?.includes('?') ? '?' + req.url.split('?')[1] : '');
      } else if (pathname === '/lavado-colchones-armenia') {
        req.url = '/lavado-colchones-armenia/index.html' + (req.url?.includes('?') ? '?' + req.url.split('?')[1] : '');
      } else if (pathname === '/lavado-alfombras-armenia') {
        req.url = '/lavado-alfombras-armenia/index.html' + (req.url?.includes('?') ? '?' + req.url.split('?')[1] : '');
      }
      next();
    });
  },
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), mpaRoutesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          'lavado-muebles-armenia': path.resolve(__dirname, 'lavado-muebles-armenia/index.html'),
          'lavado-colchones-armenia': path.resolve(__dirname, 'lavado-colchones-armenia/index.html'),
          'lavado-alfombras-armenia': path.resolve(__dirname, 'lavado-alfombras-armenia/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
