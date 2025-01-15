import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
    port: 3010,
  },
  plugins: [react()],
})
