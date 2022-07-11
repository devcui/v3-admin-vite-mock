/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 21:07:19
 * @LastEditTime: 2022-07-13 21:59:59
 * @FilePath: \swaffle-v2\mock\server.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */
import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer"

import token from "./token"
export function setupProdMockServer() {
  createProdMockServer([...token])
}
