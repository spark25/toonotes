import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Note",
    alias: "/note",
    component: () => import(/* webpackChunkName: "add" */ "../views/Add.vue"),
  },
  {
    path: "/view/:id",
    name: "ViewNote",
    component: () => import(/* webpackChunkName: "view" */ "../views/View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
