/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 21:36:20
 * @LastEditTime: 2022-07-12 21:59:21
 * @FilePath: \swaffle-v2\config\define\define.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */

import dayjs from "dayjs"
import pkg from "../../package.json"

const { dependencies, devDependencies, name, version } = pkg

export function createDefine(mode: string, isBuild: boolean): Record<string, any> {
  return {
    __APP_INFO__: {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      mode: mode,
      isBuild: isBuild
    }
  }
}
