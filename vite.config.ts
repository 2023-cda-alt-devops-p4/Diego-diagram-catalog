import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2023-cda-alt-devops-p4/catalog-dg/',
  plugins: [react()],
})
