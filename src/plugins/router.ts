import { createWebHistory, createRouter, NavigationGuardNext } from 'vue-router';
import { getIdentityApi } from '@/plugins/devbookApiClient';
import { tryExecute } from '@/commands/utils';
import { InfoResponse } from '@/api/devbookClient';

import Landing from '@/views/landing/Landing.vue';
import SignIn from '@/views/account/SignIn.vue';
import Forbidden from '@/views/account/Forbidden.vue';
import NotFound from '@/views/account/NotFound.vue';
import EmptyLayout from '@/views/layouts/EmptyLayout.vue';
import Register from '@/views/account/Register.vue';
import LandingLayout from '@/views/layouts/LandingLayout.vue';

import AdministrationLayout from '@/views/layouts/AdministrationLayout.vue';
import Administration from '@/views/administration/Administration.vue';
import { default as AdministrationDashboard } from '@/views/administration/dashboard/Dashboard.vue';
import ProductOverview from '@/views/administration/products/ProductOverview.vue';
import ProductCategories from '@/views/administration/products/categories/ProductCategories.vue';
import { default as ProductBooks } from '@/views/administration/products/books/Books.vue';
import { default as AdminInvoices } from '@/views/administration/invoices/Invoices.vue';
import { default as AdminMessages } from '@/views/administration/messages/Messages.vue';

export enum AppRoute {
    Root = '/',
    Forbidden = '/forbidden',
    SignIn = '/signin',
    Register = '/register',
    Administration = '/administration',
    AdminDashboard = '/administration/dashboard',
    AdminProductOverview = '/administration/product-overview',
    AdminProductCategories = '/administration/product-categories',
    AdminProductBooks = '/administration/product-books',
    AdminInvoices = '/administration/invoices',
    AdminMessages = '/administration/messages',
}

const routes = [
    {
        path: AppRoute.Root,
        component: Landing,
        meta: {
            layout: LandingLayout,
        },
    },
    {
        path: AppRoute.SignIn,
        component: SignIn,
        meta: {
            layout: EmptyLayout,
        },
    },
    {
        path: AppRoute.Register,
        component: Register,
        meta: {
            layout: EmptyLayout,
        },
    },
    {
        path: AppRoute.Administration,
        component: Administration,
        meta: {
            layout: AdministrationLayout,
            requireAuth: true,
            requiredRole: 'Admin',
        },
        children: [
            {
                path: '',
                redirect: AppRoute.AdminDashboard,
            },
            {
                path: AppRoute.AdminDashboard,
                component: AdministrationDashboard,
            },
            {
                path: AppRoute.AdminProductOverview,
                component: ProductOverview,
            },
            {
                path: AppRoute.AdminProductCategories,
                component: ProductCategories,
            },
            {
                path: AppRoute.AdminProductBooks,
                component: ProductBooks,
            },
            {
                path: AppRoute.AdminInvoices,
                component: AdminInvoices,
            },
            {
                path: AppRoute.AdminMessages,
                component: AdminMessages,
            },
        ],
    },
    {
        path: AppRoute.Forbidden,
        component: Forbidden,
        meta: {
            layout: EmptyLayout,
        },
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
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
            next(AppRoute.SignIn);
        }
    } else {
        next();
    }
});

function verifyRoleAndContinue(requiredRole: string, userInfo: InfoResponse | undefined, next: NavigationGuardNext) {
    if (requiredRole && userInfo?.roles.includes(requiredRole)) {
        next();
    } else {
        next(AppRoute.Forbidden);
    }
}

export default router;
