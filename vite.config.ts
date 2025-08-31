import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // importante para domínio próprio (www.confexy.com.br)
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    outDir: "docs",       // gera o build direto na pasta que o Pages usa
    emptyOutDir: true,    // limpa a pasta antes (ok, vamos repor o CNAME via /public)
  },
}));
