import { createWebHistory, createRouter, NavigationGuardNext } from 'vue-router';
import { getIdentityApi } from '@/plugins/devbookApiClient';
import { tryExecute } from '@/commands/utils';
import { InfoResponse } from '@/api/devbookClient';

import SignIn from '@/views/account/SignIn.vue';
import Register from '@/views/account/Register.vue';
import Forbidden from '@/views/errors/Forbidden.vue';
import NotFound from '@/views/errors/NotFound.vue';

import Landing from '@/views/landing/Landing.vue';
import Products from "@/views/products/Products.vue";
import ProductDetail from "@/views/products/ProductDetail.vue";
import EmptyLayout from '@/views/layouts/EmptyLayout.vue';
import AppLayout from "@/views/layouts/AppLayout.vue";
import LandingLayout from '@/views/layouts/LandingLayout.vue';

import AdministrationLayout from '@/views/layouts/AdministrationLayout.vue';
import Administration from '@/views/administration/Administration.vue';
import { default as AdministrationDashboard } from '@/views/administration/dashboard/Dashboard.vue';
import ProductOverview from '@/views/administration/products/ProductOverview.vue';
import ProductCategories from '@/views/administration/products/categories/ProductCategories.vue';
import { default as ProductBooks } from '@/views/administration/products/books/Books.vue';
import { default as AdminInvoices } from '@/views/administration/invoices/Invoices.vue';
import { default as AdminMessages } from '@/views/administration/messages/Messages.vue';

export const AppRoutes = {
    root: { path: '/', name: "root" },
    products: { path: '/categories/:id/products', name: "categoryProducts" },
    productDetail: { path: '/products/:id', name: "productDetail" },
    forbidden: { path: '/forbidden', name: "forbidden" },
    signIn: { path: '/signin', name: "signIn" },
    register: { path: '/register', name: "register" },
    administration: { path: '/administration', name: "administration" },
    adminDashboard: { path: '/administration/dashboard', name: "adminDashboard" },
    adminProductOverview: { path: '/administration/product-overview', name: "adminProductOverview" },
    adminProductCategories: { path: '/administration/product-categories', name: "adminProductCategories" },
    adminProductBooks: { path: '/administration/product-books', name: "adminProductBooks" },
    adminInvoices: { path: '/administration/invoices', name: "adminInvoices" },
    adminMessages: { path: '/administration/messages', name: "adminMessages" },
}

const routes = [
    {
        path: AppRoutes.root.path,
        name: AppRoutes.root.name,
        component: Landing,
        meta: {
            layout: LandingLayout,
        },
    },
    {
        path: AppRoutes.products.path,
        name: AppRoutes.products.name,
        component: Products,
        meta: {
            layout: AppLayout,
        },
    },
    {
        path: AppRoutes.productDetail.path,
        name: AppRoutes.productDetail.name,
        component: ProductDetail,
        meta: {
            layout: AppLayout,
        },
    },
    {
        path: AppRoutes.signIn.path,
        name: AppRoutes.signIn.name,
        component: SignIn,
        meta: {
            layout: EmptyLayout,
        },
    },
    {
        path: AppRoutes.register.path,
        name: AppRoutes.register.name,
        component: Register,
        meta: {
            layout: EmptyLayout,
        },
    },
    {
        path: AppRoutes.administration.path,
        name: AppRoutes.administration.name,
        component: Administration,
        meta: {
            layout: AdministrationLayout,
            requireAuth: true,
            requiredRole: 'Admin',
        },
        children: [
            {
                path: '',
                name: 'administrationRedirect',
                redirect: AppRoutes.adminDashboard.path,
            },
            {
                path: AppRoutes.adminDashboard.path,
                name: AppRoutes.adminDashboard.name,
                component: AdministrationDashboard,
            },
            {
                path: AppRoutes.adminProductOverview.path,
                name: AppRoutes.adminProductOverview.name,
                component: ProductOverview,
            },
            {
                path: AppRoutes.adminProductCategories.path,
                name: AppRoutes.adminProductCategories.name,
                component: ProductCategories,
            },
            {
                path: AppRoutes.adminProductBooks.path,
                name: AppRoutes.adminProductBooks.name,
                component: ProductBooks,
            },
            {
                path: AppRoutes.adminInvoices.path,
                name: AppRoutes.adminInvoices.name,
                component: AdminInvoices,
            },
            {
                path: AppRoutes.adminMessages.path,
                name: AppRoutes.adminMessages.name,
                component: AdminMessages,
            },
        ],
    },
    {
        path: AppRoutes.forbidden.path,
        name: AppRoutes.forbidden.name,
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
            next(AppRoutes.signIn.path);
        }
    } else {
        next();
    }
});

function verifyRoleAndContinue(requiredRole: string, userInfo: InfoResponse | undefined, next: NavigationGuardNext) {
    if (requiredRole && userInfo?.roles.includes(requiredRole)) {
        next();
    } else {
        next(AppRoutes.forbidden.path);
    }
}

export default router;
