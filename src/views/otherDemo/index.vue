<!-- demo2 -->
<template>
  <div class="main-otherdemo">
    <div class="title">otherdemo</div>
    <div id="container"></div>
  </div>
</template>

<script>
//引入threejs
import * as THREE from "three"; //引入Threejs
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "otherDemo",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    //初始化
    init: function() {
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },

    // 动画
    animate: function() {

    }
  }
};
</script>

<style lang="less" scoped>
.main-otherdemo {
  height: calc(100vh - 82px);
  background-color: #f4f7fc;
  #container {
    // width: 100%;
    // height: 100%;
  }
}
</style>
