<!-- demo2 -->
<template>
  <div class="main-demo2">
    <!-- <div class="title">demo2</div> -->
    <div id="container">
       <div id="info">箭头案例</div>
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
      line1: null,
      line2: null,
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
      let geometry1 = new THREE.BufferGeometry();
      let pointsArray1 = new Array();
      pointsArray1.push(new THREE.Vector3(-1, 0, 0)); //x/y/z坐标
      pointsArray1.push(new THREE.Vector3(0, 1, 0));
      pointsArray1.push(new THREE.Vector3(1, 0, 0));

      //用这个api传入顶点数组
      geometry1.setFromPoints(pointsArray1);
      let material1 = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      this.line1 = new THREE.Line(geometry1, material1);

      //创建箭头的一条直线 '——'
      let geometry2 = new THREE.BufferGeometry();
      let pointsArray2 = new Array();
      pointsArray2.push(new THREE.Vector3(0, 1, 0));
      pointsArray2.push(new THREE.Vector3(0, -3, 0));

      //用这个api传入顶点数组
      geometry2.setFromPoints(pointsArray2);
      let material2 = new THREE.LineBasicMaterial({ color: 0x0000ff });
      //下述基本一样
      this.line2 = new THREE.Line(geometry2, material2);

      //把这两条线加入到场景中
      this.scene.add(this.line1);
      this.scene.add(this.line2);

      //创建相机，设置相机位置
      this.camera = new THREE.PerspectiveCamera(
        90,
        container.clientWidth / container.clientHeight,
        1,
        500
      );

      //设置相机位置
      this.camera.position.z = 5; //防止相机与立方体位置重叠，需要将相机移动一些位置，相机在z轴的5处看到从场景

      //固定渲染
      this.renderer.render(this.scene, this.camera);
    },

    //循环渲染画面
    animate: function() {
      //渲染
      requestAnimationFrame(this.animate);

      this.line1.rotation.x += 0.01; //动起来
      this.line1.rotation.y += 0.01;
      this.line2.rotation.x += 0.01;
      this.line2.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style lang="less" scoped>
.main-demo2 {
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
