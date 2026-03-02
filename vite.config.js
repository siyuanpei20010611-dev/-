import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // 这里的 base 必须设置为相对路径 './' 或者你的仓库名 '/siyuanpei20010611-dev/'
  base: './', 
})
