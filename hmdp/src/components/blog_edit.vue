<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import '../css/blog-edit.css'

defineProps({
  msg: String,
})
const router = useRouter();
const goBack = () => {
  router.go(-1)
}
const params = reactive({})
const selectedShop = reactive({})
const showDialog = ref(false);
const inputRef = ref();
const shops = ref([
  {
    "id": 1,
    "name": "103茶餐厅",
    "typeId": 1,
    "images": "https://qcloud.dpfile.com/pc/jiclIsCKmOI2arxKN1Uf0Hx3PucIJH8q0QSz-Z8llzcN56-_QiKuOvyio1OOxsRtFoXqu0G3iT2T27qat3WhLVEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg,https://qcloud.dpfile.com/pc/IOf6VX3qaBgFXFVgp75w-KKJmWZjFc8GXDU8g9bQC6YGCpAmG00QbfT4vCCBj7njuzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vmIU_8ZGOT1OjpJmLxG6urQ.jpg",
    "area": "大关",
    "address": "金华路锦昌文华苑29号",
    "x": 120.149192,
    "y": 30.316078,
    "avgPrice": 80,
    "sold": 4215,
    "comments": 3035,
    "score": 3.7,
    "openHours": "10:00-22:00",
    "createTime": "2021-12-22T18:10:39",
    "updateTime": "2022-01-13T17:32:19"
  },
  {
    "id": 2,
    "name": "蔡馬洪涛烤肉·老北京铜锅涮羊肉",
    "typeId": 1,
    "images": "https://p0.meituan.net/bbia/c1870d570e73accbc9fee90b48faca41195272.jpg,http://p0.meituan.net/mogu/397e40c28fc87715b3d5435710a9f88d706914.jpg,https://qcloud.dpfile.com/pc/MZTdRDqCZdbPDUO0Hk6lZENRKzpKRF7kavrkEI99OxqBZTzPfIxa5E33gBfGouhFuzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vmIU_8ZGOT1OjpJmLxG6urQ.jpg",
    "area": "拱宸桥/上塘",
    "address": "上塘路1035号（中国工商银行旁）",
    "x": 120.151505,
    "y": 30.333422,
    "avgPrice": 85,
    "sold": 2160,
    "comments": 1460,
    "score": 4.6,
    "openHours": "11:30-03:00",
    "createTime": "2021-12-22T19:00:13",
    "updateTime": "2022-01-11T16:12:26"
  },]);
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
.read-the-docs {
  color: #000;
}

.upload-box {
  margin-top: 50px;
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
