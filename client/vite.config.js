import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // make a proxy for fetch to use http requests
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        secure:false
      }
    }
  },

  plugins: [react()],
})
