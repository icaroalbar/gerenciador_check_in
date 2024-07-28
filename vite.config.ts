import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __VITE_FIND_ALL_DATA__: process.env.VITE_FIND_ALL_DATA,
    __VITE_LOGIN_USER__: process.env.VITE_LOGIN_USER,
  },
});
