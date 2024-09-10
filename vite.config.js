export default {
  base: '/',
  optimizeDeps: {
    include: ['@mkkellogg/gaussian-splats-3d']
  },
  build: {
    rollupOptions: {
      external: [],
    }
  }
};