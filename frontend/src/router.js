import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        component: () =>
            import ("@/routes/main.vue"),
    },
    {
        path: "/main",
        component: () =>
            import ("@/routes/main.vue"),
    },
    {
        path: "/home",
        component: () =>
            import ("@/routes/main.vue"),
    },
    {
        path: "/city/:city",
        component: () =>
            import ("@/routes/city.vue"),
    },
    {
        path: "/about",
        component: () =>
            import ("@/routes/about.vue"),
    },
    {
        path: "/school",
        component: () =>
            import ("@/routes/school.vue"),
    },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;