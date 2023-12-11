import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/opshala.github.io/",
  plugins: [solid({ ssr: false })],
});
