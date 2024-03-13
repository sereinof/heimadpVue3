<script setup>
import { reactive, ref } from 'vue';
import '../css/blog-detail.css'
import utils from '../utils/utils';
import { useRouter } from 'vue-router';
defineProps({
  msg: String,
})
const info = reactive({
  blog: {},
  shop: {},
  likes: [],
  user: {}, // 登录用户
  followed: false, // 是否关注了
  _width: 0,
  duration: 300,
  container: null,
  items: [],
  active: 0,
  start: {
    x: 0,
    y: 0
  },
  move: {
    x: 0,
    y: 0
  },
  sensitivity: 60,
  resistance: 0.3
})
 const shop =reactive({

 })
const formatTime = (b) => {
  return b.getFullYear() + "年" + (b.getMonth() + 1) + "月" + b.getDate() + "日 ";
}
const formatMinutes = (m) => {
  if (m < 10) m = "0" + m
  return m;
}
const router  = useRouter();
const goBack = () => {
  router.go(-1);
}
const blog = reactive({
  "id": 4,
  "shopId": 4,
  "userId": 2,
  "icon": "/imgs/icons/kkjtbcr.jpg",
  "name": "可可今天不吃肉",
  "title": "无尽浪漫的夜晚丨在万花丛中摇晃着红酒杯\uD83C\uDF77品战斧牛排\uD83E\uDD69",
  "images": "/imgs/blogs/7/14/4771fefb-1a87-4252-816c-9f7ec41ffa4a.jpg,/imgs/blogs/4/10/2f07e3c9-ddce-482d-9ea7-c21450f8d7cd.jpg,/imgs/blogs/2/6/b0756279-65da-4f2d-b62a-33f74b06454a.jpg,/imgs/blogs/10/7/7e97f47d-eb49-4dc9-a583-95faa7aed287.jpg,/imgs/blogs/1/2/4a7b496b-2a08-4af7-aa95-df2c3bd0ef97.jpg,/imgs/blogs/14/3/52b290eb-8b5d-403b-8373-ba0bb856d18e.jpg",
  "content": "生活就是一半烟火·一半诗意<br/>手执烟火谋生活·心怀诗意以谋爱·<br/>当然<br/>\r\n男朋友给不了的浪漫要学会自己给\uD83C\uDF52<br/>\n无法重来的一生·尽量快乐.<br/><br/>\uD83C\uDFF0「小筑里·神秘浪漫花园餐厅」\uD83C\uDFF0<br/><br/>\n\uD83D\uDCAF这是一家最最最美花园的西餐厅·到处都是花餐桌上是花前台是花  美好无处不在\n品一口葡萄酒，维亚红酒马瑟兰·微醺上头工作的疲惫消失无际·生如此多娇\uD83C\uDF43<br/><br/>\uD83D\uDCCD地址:延安路200号(家乐福面)<br/><br/>\uD83D\uDE8C交通:地铁①号线定安路B口出右转过下通道右转就到啦～<br/><br/>--------------\uD83E\uDD63菜品详情\uD83E\uDD63---------------<br/><br/>「战斧牛排]<br/>\n超大一块战斧牛排经过火焰的炙烤发出阵阵香，外焦里嫩让人垂涎欲滴，切开牛排的那一刻，牛排的汁水顺势流了出来，分熟的牛排肉质软，简直细嫩到犯规，一刻都等不了要放入嘴里咀嚼～<br/><br/>「奶油培根意面」<br/>太太太好吃了\uD83D\uDCAF<br/>我真的无法形容它的美妙，意面混合奶油香菇的香味真的太太太香了，我真的舔盘了，一丁点美味都不想浪费‼️<br/><br/><br/>「香菜汁烤鲈鱼」<br/>这个酱是辣的 真的绝好吃‼️<br/>鲈鱼本身就很嫩没什么刺，烤过之后外皮酥酥的，鱼肉蘸上酱料根本停不下来啊啊啊啊<br/>能吃辣椒的小伙伴一定要尝尝<br/><br/>非常可 好吃子\uD83C\uDF7D\n<br/>--------------\uD83C\uDF43个人感受\uD83C\uDF43---------------<br/><br/>【\uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDF73服务】<br/>小姐姐特别耐心的给我们介绍彩票 <br/>推荐特色菜品，拍照需要帮忙也是尽心尽力配合，太爱他们了<br/><br/>【\uD83C\uDF43环境】<br/>比较有格调的西餐厅 整个餐厅的布局可称得上的万花丛生 有种在人间仙境的感觉\uD83C\uDF38<br/>集美食美酒与鲜花为一体的风格店铺 令人向往<br/>烟火皆是生活 人间皆是浪漫<br/>",
  "liked": 1,
  "comments": 104,
  "createTime": "2021-12-28T19:50:01",
  "updateTime": "2022-03-10T14:26:34"
})
blog.images = blog.images.split(',')
const toOtherInfo = ()=>{
  //todo 根据当前博客 创建者跳转至用户信息 可能是当前用户也可能不是当前用户
 router.push({
  path:"/other_user_info",query:{}
 })
}
const  score = ref(4.4)
const count = ref(0)
</script>

<template>
  <div class="header">
    <div class="header-back-btn" @click="goBack"><el-icon>
          <ArrowLeftBold />
        </el-icon></div>
    <div class="header-title"></div>
    <div class="header-share">...</div>
  </div>
  <div  class="cro_container" style="height: 85%;overflow-y: scroll; overflow-x: hidden">

    <el-carousel height="518px"  indicator-position="none" :loop="false" >
      <el-carousel-item  v-for="item in blog.images" :key="item">
        <img  class="" :src="item" />
      </el-carousel-item>
    </el-carousel>
    <div class="basic">
      <div class="basic-icon" @click="toOtherInfo">
        <img :src="blog.icon || '/imgs/icons/default-icon.png'" alt="">
      </div>
      <div class="basic-info">
        <div class="name">{{ blog.name }}</div>
        <span class="time">{{ formatTime(new Date(blog.createTime)) }}</span>
      </div>
      <div style="width: 20%">
        <div class="logout-btn" @click="follow" v-show="!user || user.id !== blog.userId">
          {{ followed ? '取消关注' : '关注' }}
        </div>
      </div>

    </div>
    <div class="blog-text" v-html="blog.content">
    </div>
    <div class="shop-basic">
      <div class="shop-icon">
        <img :src="shop.image" alt="">
      </div>
      <div style="width: 80%">
        <div class="name">{{ shop.name }}</div>
        <div>
          <el-rate v-model="shop.score">
          </el-rate>
        </div>
        <div class="shop-avg">￥{{ shop.avgPrice }}/人</div>
      </div>
    </div>
    <div class="zan-box">
      <div>
        <svg t="1646634642977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2187" width="20" height="20">
          <path
            d="M160 944c0 8.8-7.2 16-16 16h-32c-26.5 0-48-21.5-48-48V528c0-26.5 21.5-48 48-48h32c8.8 0 16 7.2 16 16v448zM96 416c-53 0-96 43-96 96v416c0 53 43 96 96 96h96c17.7 0 32-14.3 32-32V448c0-17.7-14.3-32-32-32H96zM505.6 64c16.2 0 26.4 8.7 31 13.9 4.6 5.2 12.1 16.3 10.3 32.4l-23.5 203.4c-4.9 42.2 8.6 84.6 36.8 116.4 28.3 31.7 68.9 49.9 111.4 49.9h271.2c6.6 0 10.8 3.3 13.2 6.1s5 7.5 4 14l-48 303.4c-6.9 43.6-29.1 83.4-62.7 112C815.8 944.2 773 960 728.9 960h-317c-33.1 0-59.9-26.8-59.9-59.9v-455c0-6.1 1.7-12 5-17.1 69.5-109 106.4-234.2 107-364h41.6z m0-64h-44.9C427.2 0 400 27.2 400 60.7c0 127.1-39.1 251.2-112 355.3v484.1c0 68.4 55.5 123.9 123.9 123.9h317c122.7 0 227.2-89.3 246.3-210.5l47.9-303.4c7.8-49.4-30.4-94.1-80.4-94.1H671.6c-50.9 0-90.5-44.4-84.6-95l23.5-203.4C617.7 55 568.7 0 505.6 0z"
            p-id="2188" :fill="blog.isLike ? '#ff6633' : '#82848a'"></path>
        </svg>
      </div>
      <div class="zan-list">
        <div class="user-icon-mini" v-for="u in likes" :key="u.id">
          <img :src="u.icon || '/imgs/icons/default-icon.png'" alt="">
        </div>
        <div style="margin-left:10px;text-align: center;line-height: 24px;">{{ blog.liked }}人点赞</div>
      </div>
    </div>
    <div class="blog-divider"></div>
    <div class="blog-comments">
      <div class="comments-head">
        <div>网友评价 <span>（119）</span></div>
        <div><i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="comment-list">
        <div class="comment-box" v-for="i in 3" :key="i">
          <div class="comment-icon">
            <img
              src="https://p0.meituan.net/userheadpicbackend/57e44d6eba01aad0d8d711788f30a126549507.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0"
              alt="">
          </div>
          <div class="comment-info">
            <div class="comment-user">叶小乙 <span>Lv5</span></div>
            <div  class="rate-container" style="display: flex;">
              打分
              <el-rate  v-model="score" disabled></el-rate>
            </div>
            <div style="padding: 5px 0; font-size: 14px">
              某平台上买的券，价格可以当工作餐吃，虽然价格便宜，但是这家店一点都没有...
            </div>
            <div class="comment-images">
              <img
                src="https://qcloud.dpfile.com/pc/6T7MfXzx7USPIkSy7jzm40qZSmlHUF2jd-FZUL6WpjE9byagjLlrseWxnl1LcbuSGybIjx5eX6WNgCPvcASYAw.jpg"
                alt="">
              <img
                src="https://qcloud.dpfile.com/pc/sZ5q-zgglv4VXEWU71xCFjnLM_jUHq-ylq0GKivtrz3JksWQ1f7oBWZsxm1DWgcaGybIjx5eX6WNgCPvcASYAw.jpg"
                alt="">
              <img
                src="https://qcloud.dpfile.com/pc/xZy6W4NwuRFchlOi43DVLPFsx7KWWvPqifE1JTe_jreqdsBYA9CFkeSm2ZlF0OVmGybIjx5eX6WNgCPvcASYAw.jpg"
                alt="">
              <img
                src="https://qcloud.dpfile.com/pc/xZy6W4NwuRFchlOi43DVLPFsx7KWWvPqifE1JTe_jreqdsBYA9CFkeSm2ZlF0OVmGybIjx5eX6WNgCPvcASYAw.jpg"
                alt="">
            </div>
            <div>
              浏览641 &nbsp;&nbsp;&nbsp;&nbsp;评论5
            </div>
          </div>
        </div>
        <div
          style="display: flex; justify-content: space-between;padding: 15px 0; border-top: 1px solid #f1f1f1; margin-top: 10px;">
          <div>查看全部119条评价</div>
          <div><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
    </div>
    <div class="blog-divider"></div>
  </div>
  <div class="foot">
    <div class="foot-box">
      <div class="foot-view" @click="addLike()">
        <svg t="1646634642977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2187" width="26" height="26">
          <path
            d="M160 944c0 8.8-7.2 16-16 16h-32c-26.5 0-48-21.5-48-48V528c0-26.5 21.5-48 48-48h32c8.8 0 16 7.2 16 16v448zM96 416c-53 0-96 43-96 96v416c0 53 43 96 96 96h96c17.7 0 32-14.3 32-32V448c0-17.7-14.3-32-32-32H96zM505.6 64c16.2 0 26.4 8.7 31 13.9 4.6 5.2 12.1 16.3 10.3 32.4l-23.5 203.4c-4.9 42.2 8.6 84.6 36.8 116.4 28.3 31.7 68.9 49.9 111.4 49.9h271.2c6.6 0 10.8 3.3 13.2 6.1s5 7.5 4 14l-48 303.4c-6.9 43.6-29.1 83.4-62.7 112C815.8 944.2 773 960 728.9 960h-317c-33.1 0-59.9-26.8-59.9-59.9v-455c0-6.1 1.7-12 5-17.1 69.5-109 106.4-234.2 107-364h41.6z m0-64h-44.9C427.2 0 400 27.2 400 60.7c0 127.1-39.1 251.2-112 355.3v484.1c0 68.4 55.5 123.9 123.9 123.9h317c122.7 0 227.2-89.3 246.3-210.5l47.9-303.4c7.8-49.4-30.4-94.1-80.4-94.1H671.6c-50.9 0-90.5-44.4-84.6-95l23.5-203.4C617.7 55 568.7 0 505.6 0z"
            p-id="2188" :fill="blog.isLike ? '#ff6633' : '#82848a'"></path>
        </svg>
        <span :class="{ liked: blog.isLike }">{{ blog.liked }}</span>
      </div>
    </div>
    <div style="width: 40%">
    </div>
    <div class="foot-box">
      <div class="foot-view"><i class="el-icon-chat-square"></i></div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #000;
}
.cro_container img{
  width: 100%;
}
.el-carousel__container {
    position: relative;
    height: 518px;
}
.rate-container{
  align-items: center;
}
.el-rate{
  height: 16px;
}
</style>
