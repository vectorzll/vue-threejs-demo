<!--球体阴影-->
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
      //网格模型一
      let geometry = new THREE.SphereGeometry(0.2);

      let material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
      });

      let mesh = new THREE.Mesh(geometry, material);
      // 设置产生投影的网格模型
      mesh.castShadow = true;

      this.scene.add(mesh); //网格模型添加到场景中

      //----------------------------------------------
      //创建一个平面几何体作为投影面
      let planeGeometry = new THREE.PlaneGeometry(1, 1);
      //材质默认是单面的。
      let planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x999999,
      });
      planeMaterial.side = THREE.DoubleSide; //将材质设置为双面的。
      // 平面网格模型作为投影面
      let planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
      this.scene.add(planeMesh); //网格模型添加到场景中
      planeMesh.rotateX(Math.PI / 2); //旋转网格模型  绕X轴旋转90度  因为材质设置成双面所以这里Math.PI和-Math.PI都可以。单面情况下这里要要用-Math.PI  Math.PI对应90度
      console.log("pai", -Math.PI / 2);
      planeMesh.position.y = -0.2; //设置网格模型y坐标
      // 设置接收阴影的投影面
      planeMesh.receiveShadow = true;

      // 光源-------------------------------------------------------
      // 点光源一
      // let point = new THREE.PointLight(0xffffff);
      // point.position.set(10, 5, 0); //点光源位置
      // this.scene.add(point); //点光源添加到场景中

      // 点光源二 点光源的对称光源
      // let point2 = new THREE.PointLight(0xffffff);
      // point2.position.set(-40, -40, -40); //点光源位置
      // this.scene.add(point2); //点光源添加到场景中

      // // 聚光光源
      // let spotLight = new THREE.SpotLight(0x00ff00);
      // // 设置聚光光源位置
      // spotLight.position.set(0, 0.5, 0);
      // // 聚光灯光源指向网格模型mesh2
      // spotLight.target = mesh;
      // // 设置聚光光源发散角度
      // spotLight.angle = Math.PI / 10;
      // // 设置用于计算阴影的光源对象
      // spotLight.castShadow = true;
      // this.scene.add(spotLight); //光对象添加到scene场景中

      // //聚光灯加辅助线
      // let SpotLightHelper = new THREE.SpotLightHelper(spotLight);
      // this.scene.add(SpotLightHelper);

      // 方向光
      let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      // 设置光源位置
      directionalLight.position.set(0.3, 0.3, 0);
      this.scene.add(directionalLight);

      //方向光的辅助线
      const helper = new THREE.DirectionalLightHelper(directionalLight);
      this.scene.add(helper);


      // 设置用于计算阴影的光源对象
      directionalLight.castShadow = true;
      // 设置计算阴影的区域，最好刚好紧密包围在对象周围
      // 计算阴影的区域过大：模糊  过小：看不到或显示不完整
      directionalLight.shadow.camera.near = 0.1; //0.01; 投影近点。表示距离光源的哪一个位置开始生成阴影。
      directionalLight.shadow.camera.far = 1; //10;      投影远点。表示到距离光源的哪一个位置可以生成阴影。
      //Near,Far,Left,Right,Top,Bottom六个值,相当于正交投影照相机的六个面,只有在这六个面围成的长方体内的物体才会产生阴影效果。
      directionalLight.shadow.camera.left = -0.2; //投影左边界。
      directionalLight.shadow.camera.right = 0.2; //投影右边界。
      directionalLight.shadow.camera.top = 0.2; //投影上边界。
      directionalLight.shadow.camera.bottom = -0.2; //投影下边界。
      // 设置mapSize属性可以使阴影更清晰，不那么模糊
      // directionalLight.shadow.mapSize.width = 1024; // default
      // directionalLight.shadow.mapSize.height = 1024; // default
      // directionalLight.shadow.mapSize.set(1024,1024)
      // console.log(directionalLight.shadow.camera);


      // //添加光源的阴影相机的辅助线。
      const cameraHelper = new THREE.CameraHelper(
        directionalLight.shadow.camera
      );
      this.scene.add(cameraHelper);

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
        0.01,
        10
      );
      this.camera.position.z = 1;

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
