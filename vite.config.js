import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Abdul-Samad/', // MUST match your repository name exactly
  assetsInclude: ['**/*.PNG', '**/*.png'], // For PNG assets
  build: {
    outDir: 'dist', // Explicit output directory
    assetsDir: 'assets', // Organizes assets in /dist/assets
  }
});