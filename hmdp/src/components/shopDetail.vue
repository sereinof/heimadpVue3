<script setup>
import { reactive, ref } from 'vue'
import '../css/shop-detail.css'
import util from '../utils/utils';
defineProps({
  msg: String,
})
const shop = reactive({
  score:3
});
const goBack  = ()=>{
  router.go(-1);
}
const isEnd =(v)=>{
        return new Date(v.endTime).getTime() < new Date().getTime();
      };
const count = ref(0);
const vouchers = reactive({
  value:[],
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
    <div class="header-back-btn" @click="goBack"><el-icon><ArrowLeftBold /></el-icon></div>
    <div class="header-title">店铺详情</div>
    <div class="header-share">...</div>
  </div>
  <div class="top-bar"></div>
  <div class="shop-info-box">
    <div class="shop-title">{{shop.name}}</div>
    <div class="shop-rate">
      <el-rate
          disabled v-model="shop.score"
          text-color="#F63"
          show-score
      ></el-rate>
      <span>{{shop.comments}}条</span>
    </div>
    <div class="shop-rate-info"> 口味:4.9  环境:4.8  服务:4.7 </div>
    <div class="shop-rank">
      <img src="/imgs/bd.png" width="63" height="20" alt="">
      <span>拱墅区好评榜第3名</span>
      <div><el-icon><ArrowRightBold /></el-icon></div>
    </div>
    <div class="shop-images">
      <div v-for="(s,i) in shop.images" :key="i">
        <img :src="s" alt="">
      </div>
    </div>
    <div class="shop-address">
      <div><el-icon><MapLocation /></el-icon></div>
      <span>{{shop.address}}</span>
      <div style="width: 10px; flex-grow: 2; text-align: center; color: #e1e2e3">|</div>
      <div style="margin: 0 5px"><img src="https://p0.meituan.net/travelcube/bf684aa196c870810655e45b1e52ce843484.png@24w_16h_40q" alt=""></div>
      <div><img src="https://p0.meituan.net/travelcube/9277ace32123e0c9f59dedf4407892221566.png@24w_24h_40q" alt=""></div>
    </div>
  </div>
  <div class="shop-divider"></div>
  <div class="shop-open-time">
    <span><i class="el-icon-watch"></i></span>
    <div>营业时间</div>
    <div>{{shop.openHours}}</div>
    <span class="line-right">查看详情 <i class="el-icon-arrow-right"></i></span>
  </div>
  <div class="shop-divider"></div>
  <div class="shop-voucher">
    <div>
      <span class="voucher-icon">券</span>
      <span style="font-weight: bold;">代金券</span>
    </div>
    <div class="voucher-box" v-for="v in vouchers.value" :key="v.id" v-if="!isEnd(v?v:{})">
      <div class="voucher-circle">
        <div class="voucher-b"></div>
        <div class="voucher-b"></div>
        <div class="voucher-b"></div>
      </div>
      <div class="voucher-left">
        <div class="voucher-title">{{v.title}}</div>
        <div class="voucher-subtitle">{{v.subTitle}}</div>
        <div class="voucher-price"><div>￥ {{util.formatPrice(v.payValue)}}</div>  <span>{{(v.payValue*10)/v.actualValue}}折</span></div>
      </div>
      <div class="voucher-right">
        <div v-if="v.type" class="seckill-box">vouchers
          <div class="voucher-btn" :class="{'disable-btn': isNotBegin(v) || v.stock < 1}" @click="seckill(v)">限时抢购</div>
          <div class="seckill-stock">剩余 <span>{{v.stock}}</span> 张</div>
          <div class="seckill-time">{{formatTime(v)}}</div>
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
          <img src="https://p0.meituan.net/userheadpicbackend/57e44d6eba01aad0d8d711788f30a126549507.jpg%4048w_48h_1e_1c_1l%7Cwatermark%3D0" alt="">
        </div>
        <div class="comment-info">
          <div class="comment-user">叶小乙 <span>Lv5</span></div>
          <div style="display: flex;">
            打分
            <el-rate disabled  >4.5</el-rate>
          </div>
          <div style="padding: 5px 0; font-size: 14px">
            某平台上买的券，价格可以当工作餐吃，虽然价格便宜，但是这家店一点都没有...
          </div>
          <div class="comment-images">
            <img src="https://qcloud.dpfile.com/pc/6T7MfXzx7USPIkSy7jzm40qZSmlHUF2jd-FZUL6WpjE9byagjLlrseWxnl1LcbuSGybIjx5eX6WNgCPvcASYAw.jpg" alt="">
            <img src="https://qcloud.dpfile.com/pc/sZ5q-zgglv4VXEWU71xCFjnLM_jUHq-ylq0GKivtrz3JksWQ1f7oBWZsxm1DWgcaGybIjx5eX6WNgCPvcASYAw.jpg" alt="">
            <img src="https://qcloud.dpfile.com/pc/xZy6W4NwuRFchlOi43DVLPFsx7KWWvPqifE1JTe_jreqdsBYA9CFkeSm2ZlF0OVmGybIjx5eX6WNgCPvcASYAw.jpg" alt="">
            <img src="https://qcloud.dpfile.com/pc/xZy6W4NwuRFchlOi43DVLPFsx7KWWvPqifE1JTe_jreqdsBYA9CFkeSm2ZlF0OVmGybIjx5eX6WNgCPvcASYAw.jpg" alt="">
          </div>
          <div>
            浏览641 &nbsp;&nbsp;&nbsp;&nbsp;评论5
          </div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;padding: 15px 0; border-top: 1px solid #f1f1f1; margin-top: 10px;">
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

</style>
