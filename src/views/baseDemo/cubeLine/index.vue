<!-- demo2 -->
<template>
  <div class="main-cube-line">
    <!-- <div class="title">demo2</div> -->
    <div id="container">
    </div>
  </div>
</template>

<script>
//引入threejs
import * as THREE from "three"; //引入Threejs
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "arrowAndText",
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
      // 创建场景
      this.scene = new THREE.Scene(); //创建场景

      //创建渲染器
      let container = document.getElementById("container");
      this.renderer = new THREE.WebGLRenderer(); //创建渲染器
      this.renderer.setSize(container.clientWidth, container.clientHeight); //设置渲染器大小尺寸，一般以浏览器大小来，也可以最求性能长宽都取一半
      container.appendChild(this.renderer.domElement);

      //创建箭头头部  '>'
      let geometry = new THREE.BufferGeometry();
      let pointsArray = new Array();
      //加2000个顶点，范围为-1到1
      for (let i = 0; i < 2000; i++) {
        var x = Math.random() * 2 - 1; //范围在-1到1
        var y = Math.random() * 2 - 1;
        var z = Math.random() * 2 - 1;
        pointsArray.push(new THREE.Vector3(x, y, z));
        //顶点
      }

      //用这个api传入顶点数组
      geometry.setFromPoints(pointsArray);
      let material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      this.mesh = new THREE.Line(geometry, material);

      //把这两条线加入到场景中
      this.scene.add(this.mesh);

      //创建相机，设置相机位置
      this.camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        1,
        500
      );

      //设置相机位置
      this.camera.position.z = 5; //防止相机与立方体位置重叠，需要将相机移动一些位置，相机在z轴的5处看到从场景

      //固定渲染
      // this.renderer.render(this.scene, this.camera);
    },

    //循环渲染画面
    animate: function() {
      //渲染
      requestAnimationFrame(this.animate);

      this.mesh.rotation.x += 0.01; //让立方体动起来
      this.mesh.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style lang="less" scoped>
.main-cube-line {
  height: calc(100vh - 82px);
  background-color: #f4f7fc;
  #container {
    width: 100%;
    height: 100%;
  }
  #info {
    position: absolute;
    top: 90px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display: block;
    color: red;
    font-size: 20px;
  }
}
</style>
