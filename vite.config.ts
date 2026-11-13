import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from /<repository-name>/.
// The workflow derives this value from GITHUB_REPOSITORY so repository renames
// do not require a source-code change.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
