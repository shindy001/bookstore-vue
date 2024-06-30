import { createWebHistory, createRouter } from 'vue-router';

import Landing from '@/views/landing/Landing.vue';
import SignIn from '@/views/account/SignIn.vue';
import EmptyLayout from '@/views/layouts/EmptyLayout.vue';

const routes = [
    {
        path: '/',
        component: Landing,
    },
    {
        path: '/signin',
        component: SignIn,
        meta: {
            layout: EmptyLayout,
        },
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
