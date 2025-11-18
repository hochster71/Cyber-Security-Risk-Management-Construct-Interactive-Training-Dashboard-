import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'chart-vendor': ['recharts'],
          'ui-vendor': ['framer-motion', 'lucide-react', '@headlessui/react', '@heroicons/react'],
          'markdown-vendor': ['react-markdown'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
