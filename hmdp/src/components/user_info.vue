<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';

defineProps({
  msg: String,
})
const router = useRouter()
const goBack = () => {
  router.go(-1)
}
const toEdit = ()=>{
router.push({
  path:'/user_info_edit',query:{}
})
}
const user = reactive({})
const info = reactive({})
const activeName = ref("1");
const logout = ()=>{
router.push({
  path:'/login',query:{}
})
}
</script>

<template>
    <div class="header">
    <div class="header-back-btn" @click="goBack"><el-icon>
          <ArrowLeftBold />
        </el-icon></div>
    <div class="header-title">个人主页&nbsp;&nbsp;&nbsp;</div>
  </div>
  <div class="basic">
    <div class="basic-icon">
      <img :src="user.icon || '/imgs/icons/default-icon.png'" alt="">
    </div>
    <div class="basic-info">
      <div class="name">{{user.nickName}}</div>
      <span>杭州</span>
      <div class="edit-btn" @click="toEdit">
        编辑资料
      </div>
    </div>
    <div class="logout-btn" @click="logout">
      退出登录
    </div>
  </div>
  <div class="introduce">
    <span v-if="info.introduce"></span>
    <span v-else>添加个人简介，让大家更好的认识你 <i class="el-icon-edit"></i></span>
  </div>
  <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="笔记" name="1">
        <div v-for="b in blogs" :key="b.id" class="blog-item">
          <div class="blog-img"><img :src="b.images.split(',')[0]" alt=""></div>
          <div class="blog-info">
            <div class="blog-title">{{b.title}}</div>
            <div class="blog-liked"><img src="/imgs/thumbup.png" alt=""> {{b.liked}}</div>
            <div class="blog-comments"><i class="el-icon-chat-dot-round"></i> {{b.comments}}</div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评价" name="2">评价</el-tab-pane>
      <el-tab-pane label="粉丝(0)" name="3">粉丝(0)</el-tab-pane>
      <el-tab-pane label="关注(0)" name="4">
        <div class="blog-list" @scroll="onScroll">
          <div class="blog-box" v-for="b in blogs2" :key="b.id">
            <div class="blog-img2" @click="toBlogDetail(b)"><img :src="b.img" alt=""></div>
            <div class="blog-title">{{b.title}}</div>
            <div class="blog-foot">
              <div class="blog-user-icon"><img :src="b.icon || '/imgs/icons/default-icon.png'" alt=""></div>
              <div class="blog-user-name">{{b.name}}</div>
              <div class="blog-liked" @click="addLike(b)">
                <svg t="1646634642977" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2187" width="14" height="14">
                  <path
                      d="M160 944c0 8.8-7.2 16-16 16h-32c-26.5 0-48-21.5-48-48V528c0-26.5 21.5-48 48-48h32c8.8 0 16 7.2 16 16v448zM96 416c-53 0-96 43-96 96v416c0 53 43 96 96 96h96c17.7 0 32-14.3 32-32V448c0-17.7-14.3-32-32-32H96zM505.6 64c16.2 0 26.4 8.7 31 13.9 4.6 5.2 12.1 16.3 10.3 32.4l-23.5 203.4c-4.9 42.2 8.6 84.6 36.8 116.4 28.3 31.7 68.9 49.9 111.4 49.9h271.2c6.6 0 10.8 3.3 13.2 6.1s5 7.5 4 14l-48 303.4c-6.9 43.6-29.1 83.4-62.7 112C815.8 944.2 773 960 728.9 960h-317c-33.1 0-59.9-26.8-59.9-59.9v-455c0-6.1 1.7-12 5-17.1 69.5-109 106.4-234.2 107-364h41.6z m0-64h-44.9C427.2 0 400 27.2 400 60.7c0 127.1-39.1 251.2-112 355.3v484.1c0 68.4 55.5 123.9 123.9 123.9h317c122.7 0 227.2-89.3 246.3-210.5l47.9-303.4c7.8-49.4-30.4-94.1-80.4-94.1H671.6c-50.9 0-90.5-44.4-84.6-95l23.5-203.4C617.7 55 568.7 0 505.6 0z"
                      p-id="2188" :fill="b.isLike ? '#ff6633' : '#82848a'"></path>
                </svg>
                {{b.liked}}
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    </div>
</template>

<style scoped>

.header{
    width: 100%;
    line-height: 40px;
    height: 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ff6633;
    padding: unset;
}
.header-back-btn{
    width: 10%;
    color: #ff6633;
    font-size: 22px;
}
.header-title {
    width: 90%;
    text-align: center;
    font-size: 18px;
    font-family: Hiragino Sans GB,Arial,Helvetica,"\5B8B\4F53",sans-serif;
}
.basic{
    height: 15%;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 5px 15px;
}
.basic-icon {
    width: 80px;
    height: 80px;
    padding: 1px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.07);
}
.basic-icon img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.basic-info {
    width: 54%;
    padding: 8px;
}
.basic-info .name{
    overflow: hidden;
    font-weight: bold;
    font-size: 14px;
}
.basic-info span{
    display: inline-block;
    padding: 0 10px;
    background-color: #eeeded;
    margin: 5px 0 10px;
    border-radius: 2px;
 }

.edit-btn{
    width: 90%;
    line-height: 20px;
    border-radius: 12px;
    text-align: center;
    border: #eeeded 1px solid;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.04);
}
.logout-btn{
    width: 18%;
    margin-top: 8px;
    height: 20px;
    line-height: 20px;
    color: white;
    padding: 0 2px;
    border-radius: 3px;
    background-color: #f63;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.04);
}

.introduce{
    padding: 0 15px;
}
.content {
    height: 61%;
}

.edit-container{
    background-color: #f4f4f4;
}
.divider {
    height: 1px;
    background-color: #e4e4e4;
}
.info-box {
    margin-bottom: 10px;
    padding: 5px 15px;
    background-color: #fff;
}
.info-item{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
}
.info-btn{
    display: flex;
}
.info-btn div {
    margin-left: 5px;
}

.blog-item {
    display: flex;
    padding: 10px;
    height: 90px;
    width: 90%;
    box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.1);
    margin-bottom: 10px;
}
.blog-img {
    width: 70px;
    height: 90px;
    margin-right: 10px;
}
.blog-img img {
    width: 100%;
    height: 100%;
}
.blog-info {
    width: 50%;
    flex-grow: 1;
}
.blog-title {
    line-height: 20px;
}
.blog-liked {
    line-height: 16px;
    align-items: center;
}
.blog-liked img {
    width: 16px;
    height: 16px;
}
.blog-comments i {
    font-size: 16px;
}


.follow-info{
    display: flex;
    justify-content: space-between;
    padding: 15px 10px 5px 10px;
    align-items: center;
}
.follow-info-icon {
    width: 15%;
    padding: 1px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.07);
}
.follow-info-icon img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.follow-info-name{
    width: 56%;
    padding: 8px;
    font-size: 14px;
}
.follow-info-btn{
    width: 30%;
    font-size: 10px;
    line-height: 20px;
    height: 20px;
    border: #ff6633 1px solid;
    color: #ff6633;
    border-radius: 5px;
    text-align: center;
}

/*达人探店列表*/
.blog-list {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-y: auto;
}
.blog-box{
    width: 90%;
    background-color: #fff;
    margin: 5px 0;
    box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}
.blog-img2 img{
    width: 100%;
    border-radius: 3px;
}
.blog-title {
    padding: 2px 10px;
    line-height: 24px;
    width: 92%;
    overflow: hidden;
}
.blog-foot {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 5px 0;
    padding: 0 10px;
}
.blog-user-icon {
    width: 10%;
    margin-right: 3px;
}
.blog-user-name {
    width: 65%;
    overflow: hidden;
}
.blog-user-icon img{
    width: 100%;
}
.blog-liked {
    width: 25%;
    display: flex;
    justify-content: flex-end;
}
.blog-liked img{
    width: 30%;
    height: 75%;
    margin-right: 2px;
}

</style>
