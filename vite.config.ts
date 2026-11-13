import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  // GitHub Pages project sites are served from /<repository-name>/.
  const base = env.VITE_BASE_PATH || '/'
  return {
    base,
    plugins: [react()],
  }
})
