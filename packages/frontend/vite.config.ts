import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ViteImageOptimizer({
      /* pass your config */
    }),
    process.env.ANALYZE === 'true' &&
      visualizer({
        filename: 'dist/bundle-analysis.html',
        template: 'treemap',
      }),
  ].filter(Boolean),
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 500,
  },
}))
