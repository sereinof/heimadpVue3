import axios from "axios";
import { ElMessage } from "element-plus";
const service  = axios.create({
    baseURL:'http://localhost:8081',
    timeout:60000,
    headers:{"Content-Type":'application/json;charset=UTF-8'}
})
service.interceptors.response.use(function (response) {
    // 判断执行结果
    if (!response.data.success) {
      return Promise.reject(response.data.errorMsg)
    }
    return response.data;
  }, function (error) {
    // 一般是服务端异常或者网络异常
    return ;
    console.log(error)
    if (error.response.status == 401) {
      // 未登录，跳转
      setTimeout(() => {
        location.href = "/login.html"
      }, 200);
      return Promise.reject("请先登录");
    }
    return Promise.reject("服务器异常");
  });
export default service;