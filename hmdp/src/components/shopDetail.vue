<script setup>
import { reactive, ref } from 'vue'
import util from '../utils/utils';
import { useRouter } from 'vue-router';
defineProps({
  msg: String,
})
const shop = reactive({
  score: 3
});
const router = useRouter();
const goBack = () => {
  router.go(-1);
}
const isEnd = (v) => {
  return new Date(v.endTime).getTime() < new Date().getTime();
};
const score = ref(4.5);
const vouchers = reactive({
  value: [],
});
vouchers.value.push({
  "id": 1,
  "shopId": 1,
  "title": "50元代金券",
  "subTitle": "周一至周日均可使用",
  "rules": "全场通用\\n无需预约\\n可无限叠加\\不兑现、不找零\\n仅限堂食",
  "payValue": 4750,
  "actualValue": 5000,
  "type": 0
})
</script>

<template>
  <div class="header">
    <div class="header-back-btn" @click="goBack"><el-icon>
        <ArrowLeftBold />
      </el-icon></div>
    <div class="header-title">店铺详情</div>
    <div class="header-share">...</div>
  </div>
  <div class="top-bar"></div>
  <div class="shop-info-box">
    <div class="shop-title">{{ shop.name }}</div>
    <div class="shop-rate">
      <el-rate disabled v-model="shop.score" text-color="#F63" show-score></el-rate>
      <span>{{ shop.comments }}条</span>
    </div>
    <div class="shop-rate-info"> 口味:4.9 环境:4.8 服务:4.7 </div>
    <div class="shop-rank">
      <img src="/imgs/bd.png" width="63" height="20" alt="">
      <span>拱墅区好评榜第3名</span>
      <div><el-icon>
          <ArrowRightBold />
        </el-icon></div>
    </div>
    <div class="shop-images">
      <div v-for="(s, i) in shop.images" :key="i">
        <img :src="s" alt="">
      </div>
    </div>
    <div class="shop-address">
      <div><el-icon>
          <MapLocation />
        </el-icon></div>
      <span>{{ shop.address }}</span>
      <div style="width: 10px; flex-grow: 2; text-align: center; color: #e1e2e3">|</div>
      <div style="margin: 0 5px"><img
          src="https://p0.meituan.net/travelcube/bf684aa196c870810655e45b1e52ce843484.png@24w_16h_40q" alt=""></div>
      <div><img src="https://p0.meituan.net/travelcube/9277ace32123e0c9f59dedf4407892221566.png@24w_24h_40q" alt="">
      </div>
    </div>
  </div>
  <div class="shop-divider"></div>
  <div class="shop-open-time">
    <span><i class="el-icon-watch"></i></span>
    <div>营业时间</div>
    <div>{{ shop.openHours }}</div>
    <span class="line-right">查看详情 <i class="el-icon-arrow-right"></i></span>
  </div>
  <div class="shop-divider"></div>
  <div class="shop-voucher">
    <div>
      <span class="voucher-icon">券</span>
      <span style="font-weight: bold;">代金券</span>
    </div>
    <div class="voucher-box" v-for="v in vouchers.value" :key="v.id" v-if="!isEnd(v ? v : {})">
      <div class="voucher-circle">
        <div class="voucher-b"></div>
        <div class="voucher-b"></div>
        <div class="voucher-b"></div>
      </div>
      <div class="voucher-left">
        <div class="voucher-title">{{ v.title }}</div>
        <div class="voucher-subtitle">{{ v.subTitle }}</div>
        <div class="voucher-price">
          <div>￥ {{ util.formatPrice(v.payValue) }}</div> <span>{{ (v.payValue * 10) / v.actualValue }}折</span>
        </div>
      </div>
      <div class="voucher-right">
        <div v-if="v.type" class="seckill-box">vouchers
          <div class="voucher-btn" :class="{ 'disable-btn': isNotBegin(v) || v.stock < 1 }" @click="seckill(v)">限时抢购</div>
          <div class="seckill-stock">剩余 <span>{{ v.stock }}</span> 张</div>
          <div class="seckill-time">{{ formatTime(v) }}</div>
        </div>
        <div class="voucher-btn" v-else>抢购</div>
      </div>
    </div>
  </div>
  <div class="shop-divider"></div>
  <div class="shop-comments">
    <div class="comments-head">
      <div>网友评价 <span>（119）</span></div>
      <div><i class="el-icon-arrow-right"></i></div>
    </div>
    <div class="comment-tags">
      <div class="tag">味道赞(19)</div>
      <div class="tag">牛肉赞(16)</div>
      <div class="tag">菜品不错(11)</div>
      <div class="tag">回头客(4)</div>
      <div class="tag">分量足(4)</div>
      <div class="tag">停车方便(3)</div>
      <div class="tag">海鲜棒(3)</div>
      <div class="tag">饮品赞(3)</div>
      <div class="tag">朋友聚餐(6)</div>
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
          <div style="display: flex;" class="rate-container">
            打分
            <el-rate disabled v-model="score"></el-rate>
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
  <div class="shop-divider"></div>
  <div class="copyright">
    copyright ©2021 hmdp.com
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #000;
}

.shop-voucher {
  text-align: left;
}

.shop-rate-info {
  text-align: left;
}

.comment-user {
  text-align: left;
}

.rate-container {
  align-items: center;
}
.el-rate{
  height: 18px;
}

.header {
    background-color: #fff;
}

.top-bar {
    height: 60px;
}

.header {
    width: 100%;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ff6633;
    position: fixed;
    top: 0;
    z-index: 500;
}

.header-back-btn {
    width: 10%;
    color: #ff6633;
    font-size: 24px;
    font-weight: bold;
}

.header-title {
    width: 80%;
    text-align: center;
    font-size: 18px;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
}

.header-share {
    width: 10%;
    text-align: center;
    font-size: 18px;
    color: #82848a;
    font-weight: bold;
    font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
}

.shop-title {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
}

.shop-rate {
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
}

.shop-rate-info {
    margin: 5px 0;
    color: #82848a;
}

.shop-info-box {
    padding: 0 10px;
}

.shop-rank {
    margin: 5px 0;
    display: flex;
    width: 100%;
}

.shop-rank span {
    color: #B15E2C;
    font-size: 11px;
    background: linear-gradient(
            -248deg, #FFEBCF 2%, #FFECDD 61%);
    border-radius: 1px;
    height: 20px;
    line-height: 20px;
    padding: 0 6px;
}

.shop-rank div {
    color: #5a5b5b;
    font-size: 14px;
    width: 45%;
    text-align: end;
}

.shop-images {
    display: flex;
    overflow-x: scroll;
    padding: 5px 0;
}

.shop-images img {
    height: 106px;
    width: 145px;
    margin-right: 3px;
    display: inline-block;
    border-radius: 7px;
    border: 1px solid #e1e1e1;
}

.shop-address {
    font-size: 14px;
    color: #82848a;
    height: 42px;
    display: flex;
    align-items: center;
    padding: 5px 0;
}

.shop-divider {
    height: 10px;
    background-color: #f3f1f1;
}

.shop-open-time {
    display: flex;
    padding: 10px;
    font-size: 14px;
}

.shop-open-time div {
    margin-right: 10px;
}

.line-right {
    width: 40px;
    flex-grow: 1;
    color: #82848a;
    font-size: 12px;
    text-align: right;
}

.shop-voucher {
    padding: 10px;
}

.voucher-icon {
    display: inline-block;
    line-height: 16px;
    background-color: #f5a966;
    color: white;
    padding: 0 4px 2px 4px;
}

.voucher-box {
    background-color: #fff1f1;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin: 10px 0;
}

.voucher-circle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80px;
}

.voucher-b{
    height: 10px;
    width: 10px;
    background-color: #fff;
    border-radius: 50%;
}

.voucher-left {
    flex-grow: 1;
    margin-left: 15px;
}

.voucher-right {
    margin-right: 15px;
}

.voucher-title, .voucher-subtitle, .voucher-price {
    padding: 5px 0;
}

.voucher-title {
    font-weight: bold;
}

.voucher-subtitle {
    color: #82848a;
}

.voucher-price {
    color: #F63;
    display: flex;
    align-items: center;
}

.voucher-price div {
    font-weight: bold;
    font-size: 14px;
}

.voucher-price span {
    margin-left: 10px;
    font-size: 10px;
    padding: 0 5px;
    line-height: 10px;
    background-color: #fce5e5;
}

.voucher-btn {
    background-color: #ff6633;
    color: white;
    font-size: 14px;
    line-height: 30px;
    width: 65px;
    text-align: center;
    border-radius: 15px;
}
.seckill-box{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 12px;
    padding: 15px 0 0 0;
}
.seckill-box div{
    font-size: 12px;
}
.disable-btn{
    background-color: #adacab;
}
.seckill-time{
    color: #F63;
}
.seckill-stock {
    color: #adacab;
}
.seckill-stock span{
    background-color: #fce5e5;
    color: rgb(240, 51, 51);
}
.copyright {
    color: #d1d1d1;
    margin-top: 20px;
    text-shadow: 0 1px 1px #fff;
    text-align: center;
}
.shop-comments {
    padding: 10px;
}
.comments-head {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
}
.comments-head span {
    font-size: 12px;
    font-weight: normal;
    color: #82848a;
}
.comment-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.comment-tags div {
    width: 25%;
    border: 1px solid #427fc4;
    border-radius: 5px;
    text-align: center;
    color: #427fc4;
    padding: 5px 10px;
    margin-top: 7px;
}
.comment-list {
    margin-top: 15px;
}
.comment-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
.comment-icon {
    width: 55px;
}
.comment-icon img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
.comment-info {
    width: 80%;
    flex-grow: 1;
}
.comment-user {
    font-size: 14px;
}
.comment-user span {
    font-size: 10px;
    padding: 0 10px;
    border-radius: 8px;
    background-color: #f7b253;
    color: white;
}
.comment-images {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    padding: 10px 0;
}
.comment-images img {
    height: 94px;
    width: 92px;
    border-radius: 5px;
    margin-right: 5px;
}
</style>
