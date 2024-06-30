import { createMemoryHistory, createRouter } from 'vue-router'

import Landing from "@/views/landing/Landing.vue";

const routes = [
    { 
        path: '/',
        component: Landing
    }
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
});
