import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/postures"
  },
  {
    path: "/postures",
    name: "Postures",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Postures.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
