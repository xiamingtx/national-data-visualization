// @ts-nocheck
/*
 * @Description: Description of this file
 * @Version: 2.0
 * @Author: 夏明
 * @Date: 2022-07-21 21:46:44
 * @LastEditors: 夏明
 * @LastEditTime: 2022-07-22 22:52:34
 */
import { createRouter, createWebHashHistory } from "vue-router";

export const menuRoutes = [
  {
    path: "home",
    name: "Home",
    meta: { title: "首页", icon: "home" },
    component: () => import("../views/Home/Index.vue"),
  },
  {
    path: "countries",
    name: "Countries",
    meta: { title: "总览", icon: "article" },
    component: () => import("../views/Country/Index.vue"),
  },
];

const routes = [
  {
    path: "/",
    component: () => import("../views/Layout.vue"),
    redirect: "home",
    children: menuRoutes,
  },
  {
    path: "/403",
    component: () => import("../views/403.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
