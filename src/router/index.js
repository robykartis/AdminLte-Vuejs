import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainLayouts from "../layouts/MainLayouts.vue";
import DashboarView from "../views/admin/DashboarView.vue";
import PostsIndex from "../views/admin/post/PostsIndex.vue";
import PostsDetail from "../views/admin/post/PostsDetail.vue";
const routes = [
  {
    path: "/",
    component: MainLayouts,
    children: [
      {
        path: "",
        name: "dasboard",
        component: DashboarView,
      },

      {
        path: "posts",
        name: "postsIndex",
        component: PostsIndex,
      },
      {
        path: "posts-detail",
        name: "postsDetail",
        component: PostsDetail,
      },

      {
        path: "home",
        name: "home",
        component: HomeView,
      },

      {
        path: "about",
        name: "about",

        component: function () {
          return import(
            /* webpackChunkName: "about" */
            "../views/AboutView.vue"
          );
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
