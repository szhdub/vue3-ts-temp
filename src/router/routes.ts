export const constantRoute = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error/404.vue"),
    name: "404",
  },
];
