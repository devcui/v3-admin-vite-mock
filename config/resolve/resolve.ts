/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 21:38:46
 * @LastEditTime: 2022-07-12 22:13:52
 * @FilePath: \swaffle-v2\config\resolve\resolve.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */

import path from "path"
import { AliasOptions, ResolveOptions } from "vite"

type ResolveTypes = ResolveOptions & { alias?: AliasOptions }

export function createResolve(): ResolveTypes {
  const root = "../.."
  return {
    alias: {
      "~": path.resolve(__dirname, `${root}/`),
      "@": path.resolve(__dirname, `${root}/src`)
    }
  }
}
