import { defineConfig, loadEnv } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default ({ mode }) => {
  // process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [ reactRefresh() ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '@components': path.resolve(__dirname, './src/components/'),
      }
    }
  })
}
