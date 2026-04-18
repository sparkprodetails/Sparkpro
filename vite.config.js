import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  // <-- Import the path module

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),  // Use path.resolve to create the alias
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],  // Add image formats to be included as assets
});
