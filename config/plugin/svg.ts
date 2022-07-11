/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 22:12:07
 * @LastEditTime: 2022-07-12 22:14:02
 * @FilePath: \swaffle-v2\config\plugin\svg.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"

export function createSvg() {
  const root = "../.."
  return createSvgIconsPlugin({
    iconDirs: [path.resolve(root, "src/icons/svg")],
    symbolId: "icon-[dir]-[name]"
  })
}
