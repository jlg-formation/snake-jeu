import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  
  const base = command === "build" ? "/snake-jeu/" : "/";
  
  return {
    base,
    plugins: [react(), tailwindcss()],
  };
});