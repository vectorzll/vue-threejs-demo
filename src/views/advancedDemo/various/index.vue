<template>
  <div class="main-box">
    <el-tabs
      :tab-position="tabPosition"
      style="height: 100%"
      v-model="activeName"
    >
      <el-tab-pane label="demo1" name="demo1"><div v-if="activeName === 'demo1'"><DemoOne /></div></el-tab-pane>
      <el-tab-pane label="demo2" name="demo2"><div v-if="activeName === 'demo2'"><DemoTwo /></div></el-tab-pane>
      <el-tab-pane label="demo3" name="demo3">示例三</el-tab-pane>
      <el-tab-pane label="demo4" name="demo4">示例四</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DemoOne from "./demoOne.vue";
import DemoTwo from "./demoTwo.vue";
export default {
  name: "various",
  data() {
    return {
      tabPosition: "left",
      activeName: "demo1",
    };
  },
  components: {
    DemoOne,
    DemoTwo
  },
  mounted() {},
  methods: {
    //初始化
  },
};
</script>

<style lang="less" scoped>
.main-box {
  height: calc(100vh - 82px);
  background-color: #f4f7fc;
  .el-tabs {
    width: 100%;
    height: 100%;
  }
}
</style>
