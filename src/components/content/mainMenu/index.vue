<template>
  <div>
    <!-- 首页 -->
    <!-- <div v-if="!islogin">
      <home />
    </div> -->
    <!-- 导航栏 -->
    <div class="main-menu" >
      <div class="menu-body">
        <div class="float-left logo"><span>threejs-demo</span></div>
        <div class="float-left">
          <el-menu
            :default-active="$route.path"
            class="main-el-menu"
            text-color="#97A0C3"
            active-text-color="#1DD8BF"
            mode="horizontal"
            router
          >
            <!-- 菜单 -->
            <el-submenu index="1 " hide-timeout="300000" >
              <template slot="title">基础demo</template>
              <el-menu-item index="/manage/baseDemo/cube"
                >旋转正方体</el-menu-item
              >
              <el-menu-item index="/manage/baseDemo/arrowAndText"
                >旋转箭头</el-menu-item
              >
              <el-menu-item index="/manage/baseDemo/cubeLine"
                >正方体线团</el-menu-item
              >
            </el-submenu>

            <el-menu-item index="/manage/advancedDemo" 
              >进阶demo</el-menu-item
            >
            <el-menu-item index="/manage/otherDemo" 
              >其他demo</el-menu-item
            >
            <el-menu-item index="/manage/threejsdemo">3D模块</el-menu-item>
          </el-menu>
        </div>
        <div class="clear-fix"></div>
      </div>
      <div>
        <router-view :key="this.$route.path"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import home from "views/home";
export default {
  name: "mainMenu",
  data() {
    return {
    }
  },
  mounted: function() {
    
  },
  components: {
    home
  }
};
</script>

<style lang="less" scoped>
@import "~assets/style/mixin";
.menu-body {
  width: 100%;
  height: 82px;
  background: @dep-purple-chg;
  .logo {
    width: 251px;
    height: 82px;
    font-size: 20px;
    font-family: PangMenZhengDao;
    color: #ffffff;
    line-height: 82px;
    text-align: center;
  }
  .main-el-menu {
    height: 82px;
    line-height: 82px;
    // color: #97a0c3;
    background: @dep-purple-chg;
    .el-menu-item {
      width: 140px;
      height: 82px;
      line-height: 82px;
      text-align: center;
    }
    .el-menu-item:hover {
      background: @purple-chg;
      opacity: 0.8;
      // color: @blue;
    }
    .is-active {
      background: @purple-chg;
      opacity: 0.8;
      // color: @blue;
    }
    .el-submenu {
      width: 140px !important;
      height: 82px !important;
      line-height: 82px !important;
      text-align: center !important;
    }
    .el-submenu:hover {
      background: @purple-chg !important;
      opacity: 0.8 !important;
      // color: @blue !important;
    }
    // .is-opened {
    //   width: 140px;
    //   height: 82px;
    //   line-height: 82px;
    //   text-align: center;
    // }
    // .is-opened:hover {
    //   background: @purple-chg;
    //   opacity: 0.8;
    //   color: @blue;
    // }
  }
}
</style>
