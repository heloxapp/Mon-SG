import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ATTENTION : Remplace 'nom-de-ton-depot' par le nom exact de ton projet sur GitHub !
  // Par exemple : si ton dépôt GitHub s'appelle "ma-super-pwa", écris : base: '/ma-super-pwa/',
  base: '/Mon SG/', 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})