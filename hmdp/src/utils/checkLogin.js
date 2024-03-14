import { ElMessage } from "element-plus";
import service from "./request";

export default (router) => {
    // 获取token
    let token = sessionStorage.getItem("token");
    if (!token) {
        ElMessage('本地session都没有,你个冒牌货 滚去 登录')
        useRouter().push({ path: '/login', query: {} });
        return
    }
    // 查询用户信息
    service.get("/user/me")
        .then(({ data }) => {
            ElMessage("尊敬的用户你已经登录 欢迎编辑博客")
        })
        .catch(err => {

            ElMessage(' 服务器判断未登录 未登录 滚去登录')
           
                router.push({ path: '/login', query: {} })
           
        })
}