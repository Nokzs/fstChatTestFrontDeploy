import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fstChatTestFrontDeploy/',
  server: {
    watch: {
      usePolling: true
    }
  },
  build:{
    outDir: 'dist'
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.js',
    passWithNoTests: true, // ✅ IMPORTANT
  }
})
