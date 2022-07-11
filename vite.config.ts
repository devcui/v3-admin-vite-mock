/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-11 21:34:23
 * @LastEditTime: 2022-07-12 22:25:00
 * @FilePath: \swaffle-v2\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */

import { ConfigEnv, UserConfig } from "vite"
import { createServer, createBuild, createDefine, createPlugins, createResolve } from "./config"

export default ({ mode, command }: ConfigEnv): UserConfig => {
  // 当前使用的模式和命令
  const isBuild = command === "build"
  console.log(`now use mode: ${mode}, isBuild: ${isBuild}`)
  // vite配置
  return {
    base: "./",
    envDir: "./config/env",
    resolve: createResolve(),
    build: createBuild(),
    plugins: createPlugins(mode, isBuild),
    define: createDefine(mode, isBuild),
    server: createServer()
  }
}
