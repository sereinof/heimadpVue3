<script setup>
import { ElMessage } from 'element-plus';
import { reactive, ref, inject, } from 'vue'
import { useRouter } from 'vue-router';
import service from '../utils/request';

defineProps({
  msg: String,
})
inject('hideButtom')();
let fun = inject('showButtom');
const router = useRouter();
const goBack = () => {
  router.go(-1);
  fun();
}
const goLoginByPassword = () => {
  router.push({
    path: '/login_password', query: {}
  })
}
const login = () => {

  if (!form.phone || !form.code) {
    ElMessage("手机号和验证码不能为空！");
    return
  }
  service.post("/user/login", form)
    .then(({ data }) => {
      if (data) {
        // 保存用户信息到session
        sessionStorage.setItem("token", data);
        //客户端的这个有效期是当前session
        //服务器的有效期是30分钟
      }
      // 跳转到首页
      router.push({ path: '/1', query: {} })
    })
    .catch(err => {
      ElMessage('登录失败 请查看后端代码' + err)
    })
}
const sendCode = () => {
  if (!form.phone) {
    ElMessage("手机号不能为空");
    return;
  }
  // 发送验证码
  service.post("/user/code?phone=" + form.phone)
    .then(() => { ElMessage('验证码在后端生成 自己去后端看哦') })
    .catch(err => {
      console.log(err);
      ElMessage('验证码生成失败了呢？' + err)
    });
  // 禁用按钮
  disabled = true;
  // 按钮倒计时
  let i = 60;
  this.codeBtnMsg = (i--) + '秒后可重发'
  let taskId = setInterval(() => codeBtnMsg = (i--) + '秒后可重发', 1000);
  setTimeout(() => {
    disabled = false;
    clearInterval(taskId);
    codeBtnMsg = "发送验证码";
  }, 59000)
}
const disabled = ref(false);
const radio = ref(false)
const form = reactive({
  phone: null,
  code: null
})
const codeBtnMsg = ref('点击发送验证码')
</script>

<template>
  <div class="login-container">
    <div class="header">
      <div class="header-back-btn" @click="goBack"><i class="el-icon-arrow-left"></i></div>
      <div class="header-title">手机号码快捷登录&nbsp;&nbsp;&nbsp;</div>
    </div>
    <div class="content">
      <div class="login-form">
        <div style="display: flex; justify-content: space-between">
          <el-input style="width: 60%" placeholder="请输入手机号" v-model="form.phone">
          </el-input>
          <el-button style="width: 38%" @click="sendCode" type="success" :disabled="disabled">{{ codeBtnMsg }}</el-button>
        </div>

        <div style="height: 5px"></div>
        <el-input placeholder="请输入验证码" v-model="form.code">
        </el-input>
        <div style="text-align: center; color: #8c939d;margin: 5px 0">未注册的手机号码验证后自动创建账户</div>
        <el-button @click="login" style="width: 100%; background-color:#f63; color: #fff;">登录</el-button>
        <div style="text-align: right; color:#333333; margin: 5px 0"><a @click="goLoginByPassword"
            href="javascript:void(0)">密码登录</a></div>
      </div>
      <div class="login-radio">
        <div>
          <input type="radio" name="readed" v-model="radio" value="1">
          <label for="readed"></label>
        </div>
        <div>我已阅读并同意
          <a href="javascript:void(0)">
            《黑马点评用户服务协议》</a>、
          <a href="javascript:void(0)">《隐私政策》</a>
          等，接受免除或者限制责任、诉讼管辖约定等粗体标示条款
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100%;
}

.header {
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ff6633;
}

.header-back-btn {
  width: 10%;
  color: #ff6633;
  font-size: 22px;
}

.header-title {
  width: 90%;
  text-align: center;
  font-size: 18px;
  font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
}

.content {
  height: 93%;
  background-color: #f7f5f5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login-form {
  height: 85%;
}

.login-radio {
  height: 15%;
  width: 100%;
  display: flex;
  align-items: start;
}

input[type="radio"]+label::before {
  content: "\a0";
  /*不换行空格*/
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  width: 0.7em;
  height: 0.7em;
  margin-right: .4em;
  border-radius: 50%;
  border: 2px solid #F63;
  text-indent: .15em;
  line-height: 1;
  padding: .2em;
}

input[type="radio"]:checked+label::before {
  background-color: #F63;
  background-clip: content-box;
  padding: .2em;
}

input[type="radio"] {
  opacity: 0;
}
</style>
