import axios from "axios";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const service  = axios.create({
    baseURL:'http://localhost:8081',
    timeout:60000,
    headers:{"Content-Type":'application/json;charset=UTF-8'}
})
let token = sessionStorage.getItem("token");
/** */
service.interceptors.request.use(
  config => {
    if (token) config.headers['authorization'] = token
    return config
  },
  error => {
    ElMessage('这个前置拦截应该不会有啥问题吧一般'+error)
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(function (response) {
    // 判断执行结果
    if (!response.data.success) {
      return Promise.reject(response.data.errorMsg)
    }
    return response.data;
  }, function (error) {
    // 一般是服务端异常或者网络异常
    console.log(error)
    if (error.response.status == 401) {
      ElMessage('报告状态码401')
      // 未登录，跳转
      setTimeout(() => {
       useRouter().push({path:'/login',query:{}})
      }, 200);
      return Promise.reject("请先登录");
    }
    return Promise.reject("服务器异常");
  });
export default service;