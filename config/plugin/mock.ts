/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 21:02:56
 * @LastEditTime: 2022-07-12 21:56:12
 * @FilePath: \swaffle-v2\config\plugin\mock.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */
import { viteMockServe } from "vite-plugin-mock"
import { PluginOption } from "vite"

export function createViteMockServer(mode: string, _: boolean): PluginOption {
  // 在dev模式或其他模式下是否开启Mock服务
  const prodEnabled = ["dev", "prod"].includes(mode)
  return viteMockServe({
    ignore: /^_/,
    mockPath: "mock",
    localEnabled: true,
    prodEnabled: prodEnabled,
    injectCode: `
         import { setupProdMockServer } from '../mock/server';
         setupProdMockServer();
         `
  })
}
