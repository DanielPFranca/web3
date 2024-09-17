import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      "/proxy-api": {
        target: 'https://mange-make-bot.azurewebsites.net',
        secure: false,
        changeOrigin: true,
        rewrite: (path)=> path.replace(/^\/proxy-api/,"")
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
