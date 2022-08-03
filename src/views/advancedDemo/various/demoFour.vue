<!--Group案例-->
<template>
  <div class="main-cube">
    <div id="container"></div>
  </div>
</template>

<script>
//引入threejs
import * as THREE from "three"; //引入Threejs
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "cubeDemo",
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      meshTwo: null,
      controls: null,
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    //初始化
    init: function () {
      //  创建场景对象Scene
      this.scene = new THREE.Scene();
      //加坐标
      let axisHelper = new THREE.AxisHelper(250);
      this.scene.add(axisHelper);
      //----------------------------------------------
      //模型
      //创建两个网格模型mesh1、mesh2
      let geometry = new THREE.BoxGeometry(20, 20, 20);
      let material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
      let group = new THREE.Group();
      let mesh1 = new THREE.Mesh(geometry, material);
      let mesh2 = new THREE.Mesh(geometry, material);
      mesh2.translateX(25);
      //把mesh1型插入到组group中，mesh1作为group的子对象
      group.add(mesh1);
      //把mesh2型插入到组group中，mesh2作为group的子对象
      group.add(mesh2);
      //把group插入到场景中作为场景子对象
      this.scene.add(group);//网格模型添加到场景中

      //----------------------------------------------
      



      // 环境光  环境光颜色与网格模型的颜色进行RGB进行乘法运算
      let ambient = new THREE.AmbientLight(0x000444);
      this.scene.add(ambient);
      //----------------------------------------------

      /**
       * 相机设置
       */
      let container = document.getElementById("container");
      this.camera = new THREE.PerspectiveCamera(
        70,
        container.clientWidth / container.clientHeight,
        1,
        100
      );
      this.camera.position.z = 50;

      /**
       * 创建渲染器对象
       */
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      // 渲染环境中的阴影设置，开启shadowmap
      this.renderer.shadowMap.enabled = true;
      container.appendChild(this.renderer.domElement);

      //创建控件对象
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
          console.log('查看Scene的子对象',this.scene);
    },

    // 动画
    animate: function () {
      requestAnimationFrame(this.animate);
      // this.mesh.rotation.x += 0.01;
      // this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style lang="less" scoped>
.main-cube {
  height: calc(100vh - 82px);
  background-color: #f4f7fc;
  #container {
    width: 100%;
    height: 100%;
  }
}
</style>
