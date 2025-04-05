import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Abdul-Samad/', // Must match your GitHub repo name
  assetsInclude: ['**/*.PNG', '**/*.png'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
