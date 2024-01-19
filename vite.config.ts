import { defineConfig } from "@solidjs/start/config";

import pkg from "@vinxi/plugin-mdx";
const {default: mdx} = pkg;

export default defineConfig({
  start: {
    extensions: ["mdx", "md"],
    ssr: true,
    server: {
      baseURL: process.env.BASE_PATH,
      preset: "static"
    }
  },
  plugins: [
    mdx.withImports({})({
      jsx: true,
      jsxImportSource: "solid-js",
      providerImportSource: "solid-mdx",
    })
  ]
});
