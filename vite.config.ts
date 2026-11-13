import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  // GitHub Pages serves this project from its repository subdirectory.
  // Keep local development at the domain root.
  base: mode === 'production' ? '/Unisouk_biskra_v2/' : '/',
  plugins: [react()],
}))
