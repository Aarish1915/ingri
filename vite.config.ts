import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api/reservations": {
        target: process.env.VITE_RESERVATIONS_URL || "http://localhost:4002",
        changeOrigin: true,
      },
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:4003",
        changeOrigin: true,
      },
      "/admin": {
        target: process.env.VITE_API_URL || "http://localhost:4003",
        changeOrigin: true,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
