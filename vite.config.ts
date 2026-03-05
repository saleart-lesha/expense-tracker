import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  base: '/expense-tracker/',

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },

  plugins: [
    react(),
    tailwindcss(),
    tanstackRouter(),

    VitePWA({
      registerType: 'autoUpdate',

      devOptions: {
        enabled: true,
      },

      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'pwa-*.png'],

      manifest: {
        name: 'Expense Tracker',
        short_name: 'Expenses',
        description: 'Простой трекер расходов',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './public/tests/setup.ts',
  },
});
