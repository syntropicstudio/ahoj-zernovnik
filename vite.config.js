import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative URLs support both a project subdirectory and a custom domain.
  base: './',
});
