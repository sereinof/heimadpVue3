<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
defineProps({
  msg: String,
});
const router = useRouter();
const toPage = (index) => {
  router.replace({ path: `/${index}` });
}
const count = ref(0)
</script>
<template>
  <router-view></router-view>
  <div class="foot">
    <div class="foot-box" :class="{ active: activeBtn === 1 }" @click="toPage(1)">
      <div class="foot-view"><el-icon>
          <House />
        </el-icon></div>
      <div class="foot-text">首页</div>
    </div>
    <div class="foot-box" :class="{ active: activeBtn === 2 }" @click="toPage(2)">
      <div class="foot-view"><el-icon>
          <Location />
        </el-icon></div>
      <div class="foot-text">地图</div>
    </div>
    <div class="foot-box" @click="toPage(0)">
      <img class="add-btn" src="./imgs/add.png" alt="">
    </div>
    <div class="foot-box" :class="{ active: activeBtn === 3 }" @click="toPage(3)">
      <div class="foot-view"><el-icon>
          <ChatLineRound />
        </el-icon></div>
      <div class="foot-text">消息</div>
    </div>
    <div class="foot-box" :class="{ active: activeBtn === 4 }" @click="toPage(4)">
      <div class="foot-view"><el-icon>
          <User />
        </el-icon></div>
      <div class="foot-text">我的</div>
    </div>
  </div>
</template>

<style scoped>
.foot {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 2000;
  background-color: white;
}

.read-the-docs {
  color: #888;
}

.add-btn {
  width: 3rem;
}
</style>
