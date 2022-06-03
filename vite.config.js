import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, '');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        photographer: resolve(root, 'photographer.html')
      }
    }
  }
});
