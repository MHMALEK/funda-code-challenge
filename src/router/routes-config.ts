import { RouteRecordRaw } from "vue-router";

// TODO: is public can be used on router navigation guard to implement guard (for example auth or something like that)
// TODO: Meta tags is sample in here to show we can use it for route-related meta information (like SEO or ...)
const routesConfig: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      isPublic: true,
      metaTags: {},
    },
    component: () =>
      import(/* webpackChunkName: "Home" */ "../ui/screens/Home/index.vue"),
  },
  {
    path: "/koop/:houseId",
    name: "HouseDetails",
    meta: {
      isPublic: false,
      metaTags: {},
    },
    component: () =>
      import(
        /* webpackChunkName: "HouseDetails" */ "../ui/screens/HouseDetails/index.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      isPublic: true,
      metaTags: {},
    },
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "../ui/screens/NotFound/index.vue"
      ),
  },
];

export default routesConfig;
