import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/homePage/index.vue";
import Team from "../components/teamPage/index.vue";
// const Team = () => import("../components/teamPage/index.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/introduce",
    name: "Team",
    component: Team,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
