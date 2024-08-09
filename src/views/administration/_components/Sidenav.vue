<template>
    <SidenavItem
        :item="{
            name: 'Dashboard',
            icon: 'pi-th-large',
            isActive: () => isActivePage(AppRoute.AdminDashboard),
            onClick: () => goToRoute(AppRoute.AdminDashboard),
        }"
    />
    <SidenavItem
        :item="{
            name: 'Products',
            icon: 'pi-tag',
        }"
        :submenuItems="[
            {
                name: 'Overview',
                isActive: () => isActivePage(AppRoute.AdminProductOverview),
                onClick: () => goToRoute(AppRoute.AdminProductOverview),
            },
            {
                name: 'Categories',
                isActive: () => isActivePage(AppRoute.AdminProductCategories),
                onClick: () => goToRoute(AppRoute.AdminProductCategories),
            },
        ]"
    />
    <SidenavItem
        :item="{
            name: 'Invoices',
            icon: 'pi-receipt',
            isActive: () => isActivePage(AppRoute.AdminInvoices),
            onClick: () => goToRoute(AppRoute.AdminInvoices),
        }"
    />
    <SidenavItem
        :item="{
            name: 'Messages',
            icon: 'pi-comments',
            isActive: () => isActivePage(AppRoute.AdminMessages),
            onClick: () => goToRoute(AppRoute.AdminMessages),
        }"
    />
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import SidenavItem from './SidenavItem.vue';
    import { AppRoute } from '@/plugins/router';

    const route = useRoute();
    const router = useRouter();
    const activePage = ref(AppRoute.AdminDashboard);

    function goToRoute(appRoute: AppRoute) {
        activePage.value = appRoute;
        router.push(activePage.value);
    }

    function isActivePage(appRoute: AppRoute) {
        return route.path.toLowerCase().startsWith(appRoute);
    }
</script>
