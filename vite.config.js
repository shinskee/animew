import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: '/animew/',
  resolve: {
    alias: [
      {find: '@', replacement: '/src'},
      {find: '@shared', replacement: '/src/shared'},
    ]
  }
})
