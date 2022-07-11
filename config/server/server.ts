/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 21:03:08
 * @LastEditTime: 2022-07-12 22:24:25
 * @FilePath: \swaffle-v2\config\server\server.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */

import { ServerOptions } from "vite"
import { ProxyConfig } from "./proxy"

export function createServer(): ServerOptions {
  return {
    // 是否开启HTTPS
    https: false,
    // HOST为true才可以使用ip访问服务
    host: true,
    // 端口号
    port: 4200,
    // 自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 端口被占用时，是否直接退出
    strictPort: false,
    // 接口代理
    proxy: ProxyConfig
  }
}
