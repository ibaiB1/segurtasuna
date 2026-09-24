import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: repo-izena base gisa
export default defineConfig({
  plugins: [react()],
  base: '/segurtasuna/',
})