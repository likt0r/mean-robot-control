import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

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
      import(/* webpackChunkName: "postures" */ "../views/Postures.vue")
  },
  {
    path: "/postures/:id",
    meta: { transitionName: "slide" },
    name: "Posture",
    component: () =>
      import(/* webpackChunkName: "posture" */ "../views/Posture.vue")
  },
  {
    path: "/motions",
    name: "Motions",
    component: () =>
      import(/* webpackChunkName: "motions" */ "../views/Motions.vue")
  },
  {
    path: "/motions/:id",
    meta: { transitionName: "slide" },
    name: "Motion",
    component: () =>
      import(/* webpackChunkName: "motion" */ "../views/Motion.vue")
  },
  {
    path: "/outputs",
    name: "Outputs",
    component: () =>
      import(/* webpackChunkName: "outputs" */ "../views/Outputs.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
