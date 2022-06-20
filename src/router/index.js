import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainLayouts from "../layouts/MainLayouts.vue";
// Auth
import LoginView from "../views/auth/LoginView.vue";
import RegisterView from "../views/auth/RegisterView.vue";
// Admin
import DashboarView from "../views/admin/DashboarView.vue";
import AboutView from "../views/admin/AboutView.vue";
import ContactMe from "../views/admin/ContactMe.vue";
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
        path: "about",
        name: "aboutView",
        component: AboutView,
      },
      {
        path: "contact",
        name: "contactMe",
        component: ContactMe,
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

      // {
      //   path: "about",
      //   name: "about",

      //   component: function () {
      //     return import(
      //       /* webpackChunkName: "about" */
      //       "../views/AboutView.vue"
      //     );
      //   },
      // },
    ],
  },
  {
    path: "/login",
    name: "loginView",
    component: LoginView,
  },
  {
    path: "/register",
    name: "registerView",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
