import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/b6-front-juan/',  // Esto indica el subdirectorio donde estará el sitio
  plugins: [react()],
  assetsInclude: ["**/*.PNG"],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
