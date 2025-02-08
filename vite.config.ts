import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-tarunvelagala-v1-2md0ne6eh7r.ws-us117.gitpod.io'
    ]
  }
})
