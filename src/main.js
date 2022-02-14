import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';


//引入threejs
import * as THREE from "three";
//引入镜头控件
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//引入2d渲染器
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
//引入GLTF格式
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//引入OBJ模型格式
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";



Vue.config.productionTip = false
Vue.use(ElementUI);

// Vue.use(THREE);
// Vue.use(OrbitControls);
// Vue.use(CSS2DRenderer);
// Vue.use(CSS2DObject);
// Vue.use(GLTFLoader);
// Vue.use(OBJLoader);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
