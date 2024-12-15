import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/context': path.resolve(__dirname, 'src/context/'),
      '@/mock': path.resolve(__dirname, 'src/mock/'),
      '@/router': path.resolve(__dirname, 'src/router/'),
      '@/store': path.resolve(__dirname, 'src/store/'),
      '@/types': path.resolve(__dirname, 'src/types/'),
    },
  },
})
