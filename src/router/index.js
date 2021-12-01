import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home");
const Detial = () => import("views/detial/Detial");
const Profile = () => import("views/profile/Profile");
const Cart = () => import("views/cart/Cart");

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/detial",
    name: "Detial",
    component: Detial
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profile",
    component:Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
