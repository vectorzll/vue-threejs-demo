import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("views/home"); //

//基础demo菜单----------------------------------------------------
const baseDemo = () => import("views/baseDemo"); //基础demo
//基础demo下的子菜单
const cube = () => import("views/baseDemo/cube"); //旋转正方体
const arrowAndText = () => import("views/baseDemo/arrowAndText"); //旋转箭头
const cubeLine = () => import("views/baseDemo/cubeLine"); //正方体线团

const advancedDemo = () => import("views/advancedDemo"); //进阶demo
const various = () => import("views/advancedDemo/various"); //旋转正方体


const otherDemo = () => import("views/otherDemo"); //其他demo

const threejsDemo = () => import("views/threejsDemo"); //3D模块

const mainMenu = () => import("components/content/mainMenu");

// 1.安装插件
Vue.use(VueRouter);

// 2.创建router

const routes = [
  {
    path: "",
    redirect: "/home" //
  },
  {
    path: "/home",
    component: home //登陆页面
  },
  {
    path: "/manage",
    component: mainMenu,
    name: "",
    children: [
      {
        path: "baseDemo", //基础demo
        component: baseDemo,
        children: [
          {
            path: "cube",
            component: cube
          },
          {
            path: "arrowAndText",
            component: arrowAndText
          },
          {
            path: "cubeLine",
            component: cubeLine
          }
        ]
      },
      {
        path: "advancedDemo", //进阶demo
        component: advancedDemo,
        children: [
          {
            path: "various",
            component: various
          },
        ]
      },
      {
        path: "otherDemo", //角色管理
        component: otherDemo
      },
      {
        path: "threejsdemo", //3D模块demo
        component: threejsDemo
      }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: "hash"
});

export default router;
