import { request } from "@/utils/service"

interface ILoginData {
  username: string
  password: string
}

/** 登录并返回 Token */
export function login(data: ILoginData) {
  return request({
    url: "/api/login",
    method: "post",
    data
  })
}
/** 获取用户详情 */
export function getUserInfo() {
  return request({
    url: "/api/info",
    method: "post"
  })
}

export function getRoutes() {
  return request({
    url: "/api/route",
    method: "post"
  })
}
