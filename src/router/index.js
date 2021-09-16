import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ "@/layout/layout.vue"),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ "@/pages/home.vue")
      },
      {
        path: 'second',
        name: 'second',
        component: () => import(/* webpackChunkName: "second" */ "@/pages/second.vue")
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
