import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Layout" */ "@/layout/layout.vue"),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */ "@/pages/Home.vue")
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
