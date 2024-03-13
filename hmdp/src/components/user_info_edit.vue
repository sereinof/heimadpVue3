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
const count = ref(0);
const user  = reactive({})
const info = reactive({})
</script>

<template>
 <div class="header">
    <div class="header-back-btn" @click="goBack" ><el-icon>
          <ArrowLeftBold />
        </el-icon></div>
    <div class="header-title">资料编辑&nbsp;&nbsp;&nbsp;</div>
  </div>
  <div class="edit-container">
    <div class="info-box">
      <div class="info-item">
        <div class="info-label">头像</div>
        <div class="info-btn">
          <img width="35" :src="user.icon || '/imgs/icons/default-icon.png'" alt="">
          <div><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="info-item">
        <div class="info-label">昵称</div>
        <div class="info-btn">
          <div>{{user.nickName}}</div>
          <div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="info-item">
        <div class="info-label">个人介绍</div>
        <div class="info-btn">
          <div style="overflow: hidden; width: 150px;text-align: right">{{info.introduce || '介绍一下自己'}}</div>
          <div>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="info-box">
      <div class="info-item">
        <div class="info-label">性别</div>
        <div class="info-btn">
          <div>{{info.gender || '选择'}}</div>
          <div><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="info-item">
        <div class="info-label">城市</div>
        <div class="info-btn">
          <div>{{info.city || '选择'}}</div>
          <div><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="info-item">
        <div class="info-label">生日</div>
        <div class="info-btn">
          <div>{{info.birthday || '添加'}}</div>
          <div><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
    </div>

    <div class="info-box">
      <div class="info-item">
        <div class="info-label">我的积分</div>
        <div class="info-btn">
          <div>查看积分</div>
          <div><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="info-item">
        <div class="info-label">会员等级</div>
        <div class="info-btn">
          <div><a href="javascript:void(0)">成为VIP尊享特权</a></div>
          <div><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #000;
}
.header{
    width: 100%;
    line-height: 40px;
    height: 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ff6633;
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
