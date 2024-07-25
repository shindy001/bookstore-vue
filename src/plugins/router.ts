import { createWebHistory, createRouter, NavigationGuardNext } from 'vue-router';

import Landing from '@/views/landing/Landing.vue';
import SignIn from '@/views/account/SignIn.vue';
import Forbidden from '@/views/account/Forbidden.vue';
import EmptyLayout from '@/views/layouts/EmptyLayout.vue';
import Register from '@/views/account/Register.vue';
import LandingLayout from '@/views/layouts/LandingLayout.vue';
import { getIdentityApi } from '@/plugins/devbookApiClient';
import { tryExecute } from '@/commands/utils';
import { InfoResponse } from '@/api/devbookClient';
import Administration from '@/views/administration/Administration.vue';

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
    {
        path: '/forbidden',
        component: Forbidden,
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
        const result = await tryExecute(() => getIdentityApi().identityInfo());
        if (result.success) {
            verifyRoleAndContinue(to.meta.requiredRole as string, result.data, next);
        } else {
            next('/signin');
        }
    } else {
        next();
    }
});

function verifyRoleAndContinue(requiredRole: string, userInfo: InfoResponse | undefined, next: NavigationGuardNext) {
    if (requiredRole && userInfo?.roles.includes(requiredRole)) {
        next();
    } else {
        next('/forbidden');
    }
}

export default router;
