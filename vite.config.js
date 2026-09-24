import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: /segurtasuna/ (repo-izena)
// Vercel: / (VERCEL=1 ezartzen du automatikoki Vercelen build-ean)
// Nahi izanez gero, VITE_BASE bidez gainidatzi daiteke.
const base = process.env.VITE_BASE ?? (process.env.VERCEL ? '/' : '/segurtasuna/')

export default defineConfig({
  plugins: [react()],
  base,
})