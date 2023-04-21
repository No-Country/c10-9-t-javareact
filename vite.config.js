// include: ['react-phone-number-input','react-router-dom','reactjs-social-login']
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/index.jsx'
    },
    optimizeDeps: {
      include: [
        'react-phone-number-input',
        'react-router-dom',
        'reactjs-social-login'
      ]
    }
  }
})
