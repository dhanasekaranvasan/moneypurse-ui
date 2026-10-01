import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
        port: 3000,
        host: "localhost",
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:8080",
                secure: false,
                changeOrigin: true
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "./src")
        }
    }
})
