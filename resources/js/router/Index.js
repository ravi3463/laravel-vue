import { createRouter, createWebHistory } from "vue-router";

import Header from "@/layout/Header.vue";

const routes = [
    {
        path: "/",

        component: Header,

        children: [
            {
                path: "",

                name: "Home",

                component: () => import("@/views/Home.vue"),
            },

            {
                path: "/about",

                name: "About",

                component: () => import("@/views/About.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),

    routes,
});

export default router;
