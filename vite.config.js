import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Abdul-Samad',
  assetsInclude: ['**/*.{png,jpg,jpeg,gif,svg,webp,PNG,JPG,JPEG}'], // Case-insensitive
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  esbuild: {
    loader: 'jsx',
  },
});