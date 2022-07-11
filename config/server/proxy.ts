/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 20:50:16
 * @LastEditTime: 2022-07-12 20:58:13
 * @FilePath: \swaffle-v2\config\server\proxy.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */
import { ProxyOptions } from "vite"

export type ProxyTargetList = Record<string, ProxyOptions & { rewrite?: (path: string) => string }>

export const ProxyConfig: ProxyTargetList = {
  "/backstage/api": {
    target: "http://127.0.0.1:3000",
    changeOrigin: true,
    secure: false,
    rewrite: (pre) => pre.replace(/^\/backstage/, "")
  },
  "/backstage": {
    target: "http://222.30.195.42:8080",
    changeOrigin: true,
    secure: false
  }
}
