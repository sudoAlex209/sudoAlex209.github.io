import { defineConfig } from 'vite';

export default {
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
};