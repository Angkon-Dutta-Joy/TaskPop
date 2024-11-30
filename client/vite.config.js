import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    port:3000,
    poxy: {
      "/api":{
        target: "http://localhost:8800",
        changeOrigin: true,
      },
    },
  },
});
