import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    envDir: "env",
    server: {
      port: 8080,
      hmr: true,
      proxy: {
        "/api": {
          target: "http://localhost:9130",
          // target: "https://ayubai.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/v1"),
        },
      },
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
}
)
