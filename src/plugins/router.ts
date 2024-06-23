import { createMemoryHistory, createRouter } from 'vue-router'

import AppLayout from "@/views/layouts/AppLayout.vue";
import Landing from "@/views/landing/Landing.vue";

const routes = [
    { 
        path: '/',
        components: {
            default: Landing,
            AppLayout: AppLayout,
        },
    }
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
});
