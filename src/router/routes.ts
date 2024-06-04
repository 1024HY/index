import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "首页",
          hideNavBar: false // 是否展示导航栏
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "培训信息",
          hideNavBar: false
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "我的",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "clockIn",
        name: "ClockIn",
        component: () => import("@/views/pxList/clockIn.vue"),
        meta: {
          title: "定点打卡",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "dzda",
        name: "Dzda",
        component: () => import("@/views/pxList/dzda.vue"),
        meta: {
          title: "电子档案",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "jgml",
        name: "Jgml",
        component: () => import("@/views/pxList/jgml.vue"),
        meta: {
          title: "机构目录",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "pxbm",
        name: "Pxbm",
        component: () => import("@/views/pxList/pxbm.vue"),
        meta: {
          title: "培训报名",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "pxsz",
        name: "Pxsz",
        component: () => import("@/views/pxList/pxsz.vue"),
        meta: {
          title: "培训师资",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "zcxc",
        name: "Zcxc",
        component: () => import("@/views/pxList/zcxc.vue"),
        meta: {
          title: "政策宣传",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "zscx",
        name: "Zscx",
        component: () => import("@/views/pxList/zscx.vue"),
        meta: {
          title: "证书查询",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      },
      {
        path: "zxxx",
        name: "Zxxx",
        component: () => import("@/views/pxList/zxxx.vue"),
        meta: {
          title: "在线学习",
          hideNavBar: true,
          noCache: true,
          NavBar: true
        }
      }
    ]
  }
];

export default routes;
