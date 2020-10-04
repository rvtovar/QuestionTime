import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Example from "../views/Example.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/example",
    name: "Example",
    component: Example
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
