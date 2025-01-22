import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';

export default defineConfig({
  base: '/Portfolio-Project/', // Ensure this is correct
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
  resolve: {
    alias: {
      '/index.css': path.resolve(__dirname, 'src/index.css'), // Update this path
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
  },
});
