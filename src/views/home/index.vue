<!-- 首页，登录页面 -->
<template>
  <div class="home-page">
    <div class="left-block float-left">
      <div class="logo-block">vue-threejs-demo</div>
    </div>
    <div class="right-block float-right">
      <div
        class="login"
        @click="goLogin()"
      >
        登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
    };
  },
  methods: {
    goLogin() {
        this.$router.push({ path: "/manage/baseDemo/cube" });
    }
  }
};
</script>

<style lang="less" scoped>
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background: url(~assets/img/home/background.png) no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  .left-block {
    height: 100%;
    min-width: 824px;
    width: 70%;
  }
  .right-block {
    height: 100%;
    min-width: 322px;
    width: 28.5%;
    .login {
      z-index: 1;
      width: 118px;
      height: 42px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      border-radius: 8px;
      border: 1px solid #ffffff;
      position: absolute;
      top: 39px;
      right: 96px;
    }
  }
}
</style>
