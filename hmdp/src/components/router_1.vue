<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import '../css/index.css'
defineProps({
  msg: String,
})

const router = useRouter();
const toPage = (index) => {
  router.push({ path: `/${index}`,params:{}});
}
const toBlogDetail =(blog)=>{
  router.push({
    path:'/blog_details',params:blog
  })
}
const toShopList = (id,name)=>{
  router.push({path:'/shopList',query:{id,name}});
}
const count = ref(0);
const info = reactive({
  isReachBottom: false,
  types: [
        {
            "id": 1,
            "name": "美食",
            "icon": "/types/ms.png",
            "sort": 1
        },
        {
            "id": 2,
            "name": "KTV",
            "icon": "/types/KTV.png",
            "sort": 2
        },
        {
            "id": 3,
            "name": "丽人·美发",
            "icon": "/types/lrmf.png",
            "sort": 3
        },
        {
            "id": 10,
            "name": "美睫·美甲",
            "icon": "/types/mjmj.png",
            "sort": 4
        },
        {
            "id": 5,
            "name": "按摩·足疗",
            "icon": "/types/amzl.png",
            "sort": 5
        },
        {
            "id": 6,
            "name": "美容SPA",
            "icon": "/types/spa.png",
            "sort": 6
        },
        {
            "id": 7,
            "name": "亲子游乐",
            "icon": "/types/qzyl.png",
            "sort": 7
        },
        {
            "id": 8,
            "name": "酒吧",
            "icon": "/types/jiuba.png",
            "sort": 8
        },
        {
            "id": 9,
            "name": "轰趴馆",
            "icon": "/types/hpg.png",
            "sort": 9
        },
        {
            "id": 4,
            "name": "健身运动",
            "icon": "/types/jsyd.png",
            "sort": 10
        }
    ], // 类型列表
  blogs: [
        {
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
        },
        {
            "id": 5,
            "shopId": 1,
            "userId": 2,
            "icon": "/imgs/icons/kkjtbcr.jpg",
            "name": "可可今天不吃肉",
            "title": "人均30\uD83D\uDCB0杭州这家港式茶餐厅我疯狂打call‼️",
            "images": "/imgs/blogs/4/7/863cc302-d150-420d-a596-b16e9232a1a6.jpg,/imgs/blogs/11/12/8b37d208-9414-4e78-b065-9199647bb3e3.jpg,/imgs/blogs/4/1/fa74a6d6-3026-4cb7-b0b6-35abb1e52d11.jpg,/imgs/blogs/9/12/ac2ce2fb-0605-4f14-82cc-c962b8c86688.jpg,/imgs/blogs/4/0/26a7cd7e-6320-432c-a0b4-1b7418f45ec7.jpg,/imgs/blogs/15/9/cea51d9b-ac15-49f6-b9f1-9cf81e9b9c85.jpg",
            "content": "又吃到一家好吃的茶餐厅\uD83C\uDF74环境是怀旧tvb港风\uD83D\uDCFA边吃边拍照片\uD83D\uDCF7几十种菜品均价都在20+\uD83D\uDCB0可以是很平价了！<br>·<br>店名：九记冰厅(远洋店)<br>地址：杭州市丽水路远洋乐堤港负一楼（溜冰场旁边）<br>·<br>✔️黯然销魂饭（38\uD83D\uDCB0）<br>这碗饭我吹爆！米饭上盖满了甜甜的叉烧 还有两颗溏心蛋\uD83C\uDF73每一粒米饭都裹着浓郁的酱汁 光盘了<br>·<br>✔️铜锣湾漏奶华（28\uD83D\uDCB0）<br>黄油吐司烤的脆脆的 上面洒满了可可粉\uD83C\uDF6B一刀切开 奶盖流心像瀑布一样流出来  满足<br>·<br>✔️神仙一口西多士士（16\uD83D\uDCB0）<br>简简单单却超级好吃！西多士烤的很脆 黄油味浓郁 面包体超级柔软 上面淋了炼乳<br>·<br>✔️怀旧五柳炸蛋饭（28\uD83D\uDCB0）<br>四个鸡蛋炸成蓬松的炸蛋！也太好吃了吧！还有大块鸡排 上淋了酸甜的酱汁 太合我胃口了！！<br>·<br>✔️烧味双拼例牌（66\uD83D\uDCB0）<br>选了烧鹅➕叉烧 他家烧腊品质真的惊艳到我！据说是每日广州发货 到店现烧现卖的黑棕鹅 每口都是正宗的味道！肉质很嫩 皮超级超级酥脆！一口爆油！叉烧肉也一点都不柴 甜甜的很入味 搭配梅子酱很解腻 ！<br>·<br>✔️红烧脆皮乳鸽（18.8\uD83D\uDCB0）<br>乳鸽很大只 这个价格也太划算了吧， 肉质很有嚼劲 脆皮很酥 越吃越香～<br>·<br>✔️大满足小吃拼盘（25\uD83D\uDCB0）<br>翅尖➕咖喱鱼蛋➕蝴蝶虾➕盐酥鸡<br>zui喜欢里面的咖喱鱼！咖喱酱香甜浓郁！鱼蛋很q弹～<br>·<br>✔️港式熊仔丝袜奶茶（19\uD83D\uDCB0）<br>小熊\uD83D\uDC3B造型的奶茶冰也太可爱了！颜值担当 很地道的丝袜奶茶 茶味特别浓郁～<br>·",
            "liked": 1,
            "comments": 0,
            "createTime": "2021-12-28T20:57:49",
            "updateTime": "2022-03-10T09:21:39"
        },
        {
            "id": 6,
            "shopId": 10,
            "userId": 1,
            "icon": "/imgs/blogs/blog1.jpg",
            "name": "小鱼同学",
            "title": "杭州周末好去处｜\uD83D\uDCB050就可以骑马啦\uD83D\uDC0E",
            "images": "/imgs/blogs/blog1.jpg",
            "content": "杭州周末好去处｜\uD83D\uDCB050就可以骑马啦\uD83D\uDC0E",
            "liked": 1,
            "comments": 0,
            "createTime": "2022-01-11T16:05:47",
            "updateTime": "2022-03-10T09:21:41"
        },
        {
            "id": 7,
            "shopId": 10,
            "userId": 1,
            "icon": "/imgs/blogs/blog1.jpg",
            "name": "小鱼同学",
            "title": "杭州周末好去处｜\uD83D\uDCB050就可以骑马啦\uD83D\uDC0E",
            "images": "/imgs/blogs/blog1.jpg",
            "content": "杭州周末好去处｜\uD83D\uDCB050就可以骑马啦\uD83D\uDC0E",
            "liked": 1,
            "comments": 0,
            "createTime": "2022-01-11T16:05:47",
            "updateTime": "2022-03-10T09:21:42"
        }
    ], // 播客列表
  current: 1,// blog的页码
})

</script>

<template>
  <div class="search-bar">
    <div class="city-btn">杭州 <i class="el-icon-arrow-down"></i></div>
    <div class="search-input">
      <el-input placeholder="请输入商户名、地点">
      </el-input>
    </div>
    <div class="header-icon" @click="toPage(4)"><el-icon size="20">
        <User />
      </el-icon></div>
  </div>
  <div class="type-list">
    <div class="type-box" v-for="t in info.types" :key="t.id" @click="toShopList(t.id, t.name)">
      <div class="type-view"><img :src="'/src/components/imgs' + t.icon" alt=""></div>
      <div class="type-text">{{ t.name }}</div>
    </div>
  </div>
  <div class="blog-list" @scroll="onScroll">
    <div class="blog-box" v-for="b in info.blogs" :key="b.id">
      <div class="blog-img" @click="toBlogDetail(b)"><img :src="b.images.split(',')[0]" alt=""></div>
      <div class="blog-title">{{ b.title }}</div>
      <div class="blog-foot">
        <div class="blog-user-icon"><img :src="'/src/components'+b.icon || '/src/components/imgs/icons/default-icon.png'" alt=""></div>
        <div class="blog-user-name">{{ b.name }}</div>
        <div class="blog-liked" @click="addLike(b)">
          <svg t="1646634642977" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2187" width="14" height="14">
            <path
              d="M160 944c0 8.8-7.2 16-16 16h-32c-26.5 0-48-21.5-48-48V528c0-26.5 21.5-48 48-48h32c8.8 0 16 7.2 16 16v448zM96 416c-53 0-96 43-96 96v416c0 53 43 96 96 96h96c17.7 0 32-14.3 32-32V448c0-17.7-14.3-32-32-32H96zM505.6 64c16.2 0 26.4 8.7 31 13.9 4.6 5.2 12.1 16.3 10.3 32.4l-23.5 203.4c-4.9 42.2 8.6 84.6 36.8 116.4 28.3 31.7 68.9 49.9 111.4 49.9h271.2c6.6 0 10.8 3.3 13.2 6.1s5 7.5 4 14l-48 303.4c-6.9 43.6-29.1 83.4-62.7 112C815.8 944.2 773 960 728.9 960h-317c-33.1 0-59.9-26.8-59.9-59.9v-455c0-6.1 1.7-12 5-17.1 69.5-109 106.4-234.2 107-364h41.6z m0-64h-44.9C427.2 0 400 27.2 400 60.7c0 127.1-39.1 251.2-112 355.3v484.1c0 68.4 55.5 123.9 123.9 123.9h317c122.7 0 227.2-89.3 246.3-210.5l47.9-303.4c7.8-49.4-30.4-94.1-80.4-94.1H671.6c-50.9 0-90.5-44.4-84.6-95l23.5-203.4C617.7 55 568.7 0 505.6 0z"
              p-id="2188" :fill="b.isLike ? '#ff6633' : '#82848a'"></path>
          </svg>
          {{ b.liked }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.search-bar{
    background-color: #ff6633;
    color: white;
    display: flex;
    justify-content: space-around;
    height: 7%;
    align-items: center;
    padding: 0 8px;
}
</style>
