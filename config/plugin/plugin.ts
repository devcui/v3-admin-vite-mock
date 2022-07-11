import { PluginOption } from "vite"
import { createViteMockServer } from "./mock"
import { createSvg } from "./svg"
import viteCompression from "vite-plugin-compression"
import legacy from "@vitejs/plugin-legacy"
import vue from "@vitejs/plugin-vue"
import Unocss from "unocss/vite"

export function createPlugins(mode: string, isBuild: boolean): PluginOption[] {
  const plugins: PluginOption[] = []
  plugins.push(vue())
  plugins.push(createViteMockServer(mode, isBuild))
  plugins.push(createSvg())
  plugins.push(Unocss())
  if (isBuild) {
    plugins.push(legacy())
    plugins.push(viteCompression({ deleteOriginFile: false }))
  }
  return plugins
}
