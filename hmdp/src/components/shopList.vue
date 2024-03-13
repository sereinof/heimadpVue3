<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import '../css/shop-list.css';
defineProps({
  msg: String,
})
const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.go(-1);
}
const toDetail = (id) => {
  router.push({ path: '/shop_details', query: { id } })
}
const info = reactive({
  typeName: 'ceshi',
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
  ],
  shops: [
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
    },]
})
info.typeName = route.query.name;
const count = ref(0)
</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header-back-btn" @click="goBack"><el-icon>
          <ArrowLeftBold />
        </el-icon></div>
      <div class="header-title">{{ info.typeName }}</div>
      <div class="header-search">
        <el-icon :size="20">
          <Search />
        </el-icon>
      </div>
    </div>
    <div class="sort-bar">
      <div class="sort-item">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ info.typeName }} <el-icon :size="10" class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="t in info.types" :key="t.id" :command="t">
                {{ t.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

      </div>
      <div class="sort-item" @click="sortAndQuery('')">
        距离 <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
      <div class="sort-item" @click="sortAndQuery('comments')">
        人气 <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
      <div class="sort-item" @click="sortAndQuery('score')">
        评分 <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
    </div>
    <div class="shop-list" @scroll="onScroll">
      <div class="shop-box" v-for="s in info.shops" :key="s.id" @click="toDetail(s.id)">
        <div class="shop-img"><img :src="s.images.split(',')[0]" alt=""></div>
        <div class="shop-info">
          <div class="shop-title shop-item">{{ s.name }}</div>
          <div class="shop-rate shop-item">
            <el-rate disabled v-model="s.score" text-color="#F63" show-score></el-rate>
            <span>{{ s.comments }}条</span>
          </div>
          <div class="shop-area shop-item">
            <span>{{ s.area }}</span>
            <span v-if="s.distance">{{ s.distance < 1000 ? s.distance.toFixed(1) + 'm' : (s.distance / 1000).toFixed(1)
        + 'km' }}</span>
          </div>
          <div class="shop-avg shop-item">￥{{ s.avgPrice }}/人</div>
          <div class="shop-address shop-item">
            <el-icon>
              <MapLocation />
            </el-icon>
            <span>{{ s.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #000;
}

.sort-bar svg {
  width: 25px;
  height: 25px;
}

.shop-avg {
  text-align: left;
  opacity: 1;
}

.container {
  background-color: #f1f1f1;
  height: 100%;
}

.shop-title {
  font-size: 15px;
  font-weight: bold;
  text-align: left;
}

.shop-address {
  font-size: 12px;
  color: black;
  height: 6px;
  display: flex;
  align-items: center;
  padding: 5px 0px;
}

.el-rate {
  height: 20px;
}

.el-dropdown-link {
  display: flex;
}

.sort-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
