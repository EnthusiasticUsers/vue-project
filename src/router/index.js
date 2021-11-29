import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home");
const Detial = () => import("views/detial/Detial");

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/detial",
    name:"Detial",
    component:Detial
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
