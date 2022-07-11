import { BuildOptions } from "vite"

export function createBuild(): BuildOptions {
  return {
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      },
      output: {
        comments: false
      }
    },
    assetsDir: "assets"
  }
}
