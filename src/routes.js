// default
import { createRouter, createWebHistory } from "vue-router";

// pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";

// routering
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/shop/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
