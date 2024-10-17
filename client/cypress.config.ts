import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: vitePreprocessor(),
    },
  },
});
