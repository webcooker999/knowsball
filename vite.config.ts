import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/api-stake-com': {
          target: 'https://api.stake.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api-stake-com/, ''),
          headers: {
            Referer: 'https://stake.com',
            Origin: 'https://stake.com',
          },
        },
        '/api-stake-us': {
          target: 'https://api.stake.us',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api-stake-us/, ''),
          headers: {
            Referer: 'https://stake.us',
            Origin: 'https://stake.us',
          },
        },
      },
    },
  };
});
