<!-- 角色管理 -->
<template>
  <div class="main">
    <div id="container"></div>
  </div>
</template>

<script>
//引入threejs
import * as THREE from "three"; //引入Threejs
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
export default {
  name: "threejsDemo",
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
    // this.animate();
    this.loadOBJ();
  },
  methods: {
    //初始化
    init: function() {
      //  创建场景对象Scene
      this.scene = new THREE.Scene();

      //网格模型添加到场景中
      let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      let material = new THREE.MeshNormalMaterial({
        color: "white"
      });
      this.mesh = new THREE.Mesh(geometry, material);
      // this.scene.add(this.mesh);
      //加坐标
      let axisHelper = new THREE.AxisHelper(250);
      this.scene.add(axisHelper);

      /**
       * 相机设置
       */
      let container = document.getElementById("container");
      this.camera = new THREE.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        0.01,
        10
      );
      this.camera.position.z = 1;

      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      //创建控件对象
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },

    // 动画
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
    // 加载obj文件
    loadOBJ() {
      let objLoader = new OBJLoader();
      let obj1;
      let _this = this;
      // const materialScene = new THREE.MeshBasicMaterial({ color: 0x008000 });
      objLoader.load(
        "/static/male02.obj",
        function(obj) {
          // obj.material = materialScene;
          //模型缩放
          obj.scale.set(0.003, 0.003, 0.003);
          // console.log("obj", obj);
          _this.scene.add(obj);
          // 光照
          let ambient = new THREE.AmbientLight(0x008000);
          _this.scene.add(ambient);
          _this.animate();
        },
        function() {
          console.log("导入模型成功");
        },
        function() {
          console.log("导入模型失败");
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 82px);
  background-color: #f4f7fc;
  #container {
    width: 100%;
    height: 100%;
  }
}
</style>
