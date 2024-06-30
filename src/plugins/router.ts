import { createMemoryHistory, createRouter } from 'vue-router'

import Landing from "@/views/landing/Landing.vue";

const routes = [
    { 
        path: '/',
        component: Landing,
        meta: {
            layout: "EmptyLayout"
        }
    }
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
});
