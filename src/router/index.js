import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("views/home"); //账号管理

//基础demo菜单----------------------------------------------------
const baseDemo = () => import("views/baseDemo"); //运营管理
//基础demo下的子菜单
const cube = () => import("views/baseDemo/cube"); //CSP企业认证审核
const arrowAndText = () => import("views/baseDemo/arrowAndText"); //订单管理
const cubeLine = () => import("views/baseDemo/cubeLine"); //订单管理

const advancedDemo = () => import("views/advancedDemo"); //用户管理
const otherDemo = () => import("views/otherDemo"); //角色管理

const threejsDemo = () => import("views/threejsDemo"); //账号管理

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
        component: advancedDemo
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
