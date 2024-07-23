import { createWebHistory, createRouter } from 'vue-router';

import Landing from '@/views/landing/Landing.vue';
import SignIn from '@/views/account/SignIn.vue';
import EmptyLayout from '@/views/layouts/EmptyLayout.vue';
import Register from '@/views/account/Register.vue';
import LandingLayout from '@/views/layouts/LandingLayout.vue';
import { getIdentityApi } from '@/plugins/devbookApiClient';
import { tryExecute } from '@/commands/utils';

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

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, _, next) => {
    if (to.meta.requireAuth) {
        const result = await tryExecute(() => getIdentityApi().identityManageInfoGET());
        if (result.success) {
            next();
        } else {
            next('/signin');
        }
    } else {
        next();
    }
});

export default router;
