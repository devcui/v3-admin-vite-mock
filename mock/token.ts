/*
 * @Author: cui<devcui@outlook.com>
 * @LastEditors: cui<devcui@outlook.com>
 * @Date: 2022-07-12 21:07:19
 * @LastEditTime: 2022-07-13 23:15:42
 * @FilePath: \swaffle-v2\mock\token.ts
 * @Description:
 *
 * Copyright (c) 2022 by cui<devcui@outlook.com>, All Rights Reserved.
 */
import { MockMethod } from "vite-plugin-mock"

const token: any = {
  token: "this is token",
  expired: 30000,
  refreshToken: "this is refresh token",
  tokenType: "bearer",
  scope: "webapp"
}

const methods: MockMethod[] = [
  {
    url: "/api/login",
    timeout: 1000,
    method: "post",
    response: () => {
      return {
        code: 0,
        data: token
      }
    }
  },
  {
    url: "/api/info",
    timeout: 1000,
    method: "post",
    response: () => {
      return {
        code: 0,
        data: { user: { roles: ["admin"] } }
      }
    }
  },
  {
    url: "/api/route",
    timeout: 1000,
    method: "post",
    response: () => {
      return {
        code: 0,
        data: {
          routes: [
            {
              path: "/hello",
              component: "/layout/index.vue",
              children: [
                {
                  path: "/index",
                  component: "/views/hello/index.vue",
                  name: "hello",
                  meta: {
                    title: "你好我是动态路由",
                    icon: "dashboard",
                    affix: true
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
]

export default methods
