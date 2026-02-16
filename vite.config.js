import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Asegura que los archivos se generen con nombres limpios para el servidor
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    // Configuración para previsualización local fluida
    port: 3000,
    open: true
  }
})
