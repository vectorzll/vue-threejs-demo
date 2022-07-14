<!--法向量案例,没有起作用，法向量 -->
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
      meshTwo:null,
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
      let geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
      //类型数组创建顶点数据
      let vertices = new Float32Array([
        0, 0, 0, //顶点1坐标
        0.5, 0, 0, //顶点2坐标
        0, 1, 0, //顶点3坐标
        0, 0, 0, //顶点4坐标
        0, 0, 1, //顶点5坐标
        0.5, 0, 0, //顶点6坐标
      ]);
      // 创建属性缓冲区对象
      let attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
      // 设置几何体attributes属性的位置属性
      geometry.attributes.position = attribue;

      // 顶点法向量--------------------------------------------------
       let normals = new Float32Array([
        0, 0, 1, //顶点1法向量
        0, 0, 1, //顶点2法向量
        0, 0, 1, //顶点3法向量

        0, 1, 0, //顶点4法向量
        0, 1, 0, //顶点5法向量
        0, 1, 0, //顶点6法向量
      ]);
      // 设置几何体attributes属性的位置normal属性
      geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的法向量数据

      // 顶点颜色渲染模式------------------------------------
      //类型数组创建顶点颜色color数据-----
      let colors = new Float32Array([
        0, 0, 1, //顶点1颜色
        0, 0, 1, //顶点2颜色
        0, 0, 1, //顶点3颜色

        0, 0, 1, //顶点4颜色
        0, 0, 1, //顶点5颜色
        0, 0, 1, //顶点6颜色
      ]);
      // 设置几何体attributes属性的颜色color属性
      geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
      //材质对象
      let modelTwoMaterial = new THREE.PointsMaterial({
        // 使用顶点颜色数据渲染模型，不需要再定义color属性
        // color: 0xff0000,
        vertexColors: THREE.VertexColors, //以顶点颜色为准
        size: 0.1 //点对象像素尺寸
      });
      // 顶点渲染模式  点模型对象Points
      // let points = new THREE.Points(geometry, modelTwoMaterial); //点模型对象
      // //渐变色 对顶点的颜色数据进行插值计算
      let points = new THREE.Mesh(geometry, modelTwoMaterial); //点模型对象
      this.scene.add(points);
      // 光源-------------------------------------------------------
      // 点光源一
      let point = new THREE.PointLight(0xffffff);
      point.position.set(10, 5, 0); //点光源位置
      this.scene.add(point); //点光源添加到场景中
      // 点光源二 点光源的对称光源
      // let point2 = new THREE.PointLight(0xffffff);
      // point2.position.set(-40, -40, -40); //点光源位置
      // this.scene.add(point2); //点光源添加到场景中

      // 环境光 环境光颜色与网格模型的颜色进行RGB进行乘法运算
      let ambient = new THREE.AmbientLight(0x444444);
      this.scene.add(ambient);
      //----------------------------------------------

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
