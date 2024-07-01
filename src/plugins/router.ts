import { createWebHistory, createRouter } from 'vue-router';

import Landing from '@/views/landing/Landing.vue';
import SignIn from '@/views/account/SignIn.vue';
import EmptyLayout from '@/views/layouts/EmptyLayout.vue';
import Register from '@/views/account/Register.vue';
import LandingLayout from '@/views/layouts/LandingLayout.vue';

const routes = [
    {
        path: '/',
        component: Landing,
        meta: {
            layout: LandingLayout,
        },
    },
    {
        path: '/signin',
        component: SignIn,
        meta: {
            layout: EmptyLayout,
        },
    },
    {
        path: '/register',
        component: Register,
        meta: {
            layout: EmptyLayout,
        },
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
