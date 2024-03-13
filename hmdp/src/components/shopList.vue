<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import '../css/shop-list.css';
import service from '../utils/request';
import { ElMessage } from 'element-plus';
defineProps({
  msg: String,
})
const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.go(-1);
}
const sortAndQuery = (sortBy) => {
  this.params.sortBy = sortBy;
  filteShops();
}
const filteShops = () => {
  service.get("/shop/of/type", {
    params: info.params
  })
    .then(({ data }) => {
      if (!data) {
        return
      }
      data.forEach(s => {
        s.score = s.score / 10;
        s.images = s.images.split(',')[0];
      });
      info.shops = info.shops.concat(data);
    })
    .catch(err => {
      console.log(err);
      this.$message.error(err)
    })
}
const toDetail = (id) => {
  router.push({ path: '/shop_details', query: { id } })
}
onMounted(() => {
  service.get("/shop-type/list")
    .then(({ data }) => {
      info.types = data;
    })
    .catch(err => {
      console.log(err);
      ElMessage("获取商店类型的时候出错了" + err)
    });
  filteShops();
})
const info = reactive({
  typeName: 'ceshi',
  types: [],
  shops: [],
  params: {
    typeId: 0,
    current: 1,
    sortBy: "",
    x: 120.149993, // 经度
    y: 30.334229 // 纬度 写死的是不
  }
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
