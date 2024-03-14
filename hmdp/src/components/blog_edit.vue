<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import '../css/blog-edit.css'
import service from '../utils/request';
import { ElMessage } from 'element-plus';
import checkLogin from '../utils/checkLogin';
defineProps({
  msg: String,
})
const router = useRouter();
const goBack = () => {
  router.go(-1)
}
checkLogin(router);
const shopName = ref('')
const params = reactive({})
const selectedShop = reactive({})
const showDialog = ref(false);
const inputRef = ref();
const shops = ref([]);
//这个组件setup的时候需要检查是否已经登入 毕竟是在编辑博客了 这是和用户强相关的


const queryShops = () => {
  service.get("/shop/of/name?name=" + shopName.value)
    .then(({ data }) => shops.value = data)
    .catch((err) => {
      ElMessage("查询店铺出错了呢" + err)
    })
}
onMounted(() => {
  queryShops()
})
const openFileDialog = () => {
  inputRef.value.click();
}
const selectShop = (s) => {
  selectedShop = s;
  showDialog = false;
}
</script>

<template>
  <div class="header">
    <div class="header-cancel-btn" @click="goBack">取消</div>
    <div class="header-title">&nbsp;&nbsp;发笔记<el-icon>
        <InfoFilled />
      </el-icon></div>
    <div class="header-commit">
      <div class="header-commit-btn" @click="submitBlog">发布</div>
    </div>
  </div>
  <div class="upload-box">
    <input type="file" @change="fileSelected" name="file" ref="inputRef" style="display: none">
    <div class="upload-btn" @click="openFileDialog">
      <el-icon>
        <Picture />
      </el-icon>
      <div style="font-size: 12px;line-height: 12px">上传照片</div>
    </div>
    <div class="pic-list">
      <div class="pic-box" v-for="(f, i) in fileList" :key="i">
        <img :src="f" alt="">
        <i class="el-icon-close" @click="deletePic(i)"></i>
      </div>
    </div>
  </div>
  <div class="blog-title">
    <input v-model="params.title" type="text" placeholder="填写标题更容易上首页哦~">
  </div>
  <div class="blog-content">
    <textarea v-model="params.content" placeholder="最近打卡了什么地方，有什么新奇体验呢？"></textarea>
  </div>
  <div class="divider"></div>
  <div class="blog-shop" @click="showDialog = true">
    <div class="shop-left">关联商户</div>
    <div v-if="selectedShop.name">{{ selectedShop.name }}</div>
    <div v-else>去选择&nbsp;<i class="el-icon-arrow-right"></i></div>
  </div>
  <div class="mask" v-show="showDialog" @click="showDialog = false"></div>

  <transition name="el-zoom-in-bottom">
    <div class="shop-dialog" v-show="showDialog">
      <div class="blog-shop">
        <div class="shop-left">关联商户</div>
      </div>
      <div class="search-bar">
        <div class="city-select">杭州 <i class="el-icon-arrow-down"></i></div>
        <div class="search-input">
          <i class="el-icon-search" @click="queryShops"></i>
          <input v-model="shopName" type="text" placeholder="搜索商户名称">
        </div>
      </div>
      <div class="shop-list">
        <div v-for="s in shops" class="shop-item" @click="selectShop(s)">
          <div class="shop-name">{{ s.name }}</div>
          <div>{{ s.area }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.header {
  padding: 15px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.header-cancel-btn {
  font-size: 14px;
  font-weight: bold;
}

.header-commit-btn {
  color: white;
  background-color: #F63;
  padding: 0 12px;
  border-radius: 15px;
}

.header-title i {
  font-size: 14px;
}

.header-title {
  text-align: center;
  font-size: 18px;
  font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
}

.upload-box {
  padding: 15px;
  display: flex;
  overflow-x: scroll;
}

.upload-btn {
  width: 70px;
  height: 125px;
  line-height: 40px;
  text-align: center;
  align-items: center;
  border: 1px dashed #3a8ee6;
  border-radius: 5px;
  font-size: 30px;
  color: #82848a;
  margin-right: 10px;
}

.upload-btn i {
  margin-top: 35px;
}

.pic-list {
  display: flex;
  overflow-x: scroll;
  height: 125px;
}

.pic-box {
  width: 100px;
  height: 120px;
  border-radius: 5px;
  margin-right: 2px;
  border: 1px solid #c0ccda;
  position: relative;
}

.pic-box img {
  width: 100px;
  height: 120px;
  border-radius: 5px;
}

.pic-box i {
  position: absolute;
  z-index: 99;
  top: 2px;
  right: 2px;
  color: gray;
}

.blog-title,
.blog-content {
  padding: 5px 15px;
}

.blog-title input {
  width: 100%;
  line-height: 30px;
  font-size: 14px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #e6e6e8;
}

input::placeholder {
  font-weight: bold;
  color: #cccccc;
}

textarea::placeholder {
  color: #cccccc;
}

.blog-content textarea {
  width: 100%;
  height: 310px;
  border: 0;
}

.blog-shop {
  color: #82848a;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.shop-left {
  color: #111111;
  font-size: 14px;
  font-weight: bold;
}

.divider {
  background-color: #f4f4f5;
  height: 10px;
}

.end-gray {
  background-color: #f4f4f5;
  height: 100%;
}

.mask {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 299;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}

.shop-dialog {
  position: absolute;
  z-index: 999;
  bottom: 0;
  height: 500px;
  width: 100%;
  background-color: #fff;
}

.search-bar {
  display: flex;
  padding: 15px;
  line-height: 30px;
  justify-content: space-between;
}

.city-select {
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
}

.shop-list {
  padding: 15px;
  overflow-y: scroll;
  height: 100%;
}

.shop-item {
  border-bottom: 1px solid #eae8e8;
  padding: 8px 0;
}

.shop-name {
  font-size: 14px;
  font-weight: bold;
}

.read-the-docs {
  color: #000;
}

.header {
  padding: unset;
  justify-content: space-around;
}

.header-title {
  width: unset;
}

.search-input {
  width: 50%;
  flex-grow: 1;
  background-color: #f1f1f1;
  line-height: 30px;
  align-items: center;
  border-radius: 20px;
  display: flex;
  padding: 0 10px;
}

.search-input input {
  margin-left: 10px;
  border: 0;
  width: 100%;
  background-color: #f1f1f1;
}

input:focus,
textarea:focus {
  outline: none;
}
</style>
