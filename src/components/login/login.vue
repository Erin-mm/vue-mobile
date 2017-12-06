<template>
  <div class="login">
   <mt-header fixed title="登录">
      <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
   </mt-header>
   <div class="login-box">
     <img src="../../assets/images/avatar.png" alt="this is avatar">
   </div>
   <div class="login-way">
     <p>登入方式</p>
     <ul class="login-item">
      <li v-for="(imgItem,i) in images" :key='i'>
        <img :src="imgItem" alt="this is ali">
      </li>
     </ul>
   </div>
    <div class="test">
      <span>22222</span>
      <span>2222</span>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import aliImg from "../../assets/images/ali.png";
import wechatImg from "../../assets/images/wechat.png";
import weiboImg from "../../assets/images/weibo.png";

export default {
  data() {
    return {
      images: [aliImg, wechatImg, weiboImg]
    };
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
  .test{
    background: #ccc;
    span{
      font-size:0.24rem;
    }
  }
.login-box {
  display: flex;
  padding-top: 0.8rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  img {
    width: 2rem;
  }
}
.login-way {
  p {
    font-size: 0.28rem;
    text-align: center;
    color: #aaa;
  }
  .login-item {
    margin-top: 0.4rem;
    padding: 0 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      height: 1rem;
      font-size: 0;
      img {
        width: 1rem;
      }
    }
  }
}
</style>



