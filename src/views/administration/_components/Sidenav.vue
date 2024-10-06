<template>
    <SidenavItem
        :item="{
            name: 'Dashboard',
            icon: 'pi-th-large',
            isActive: () => isActivePage(AppRoutes.adminDashboard.path),
            onClick: () => goToRoute(AppRoutes.adminDashboard.path),
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
                isActive: () => isActivePage(AppRoutes.adminProductOverview.path),
                onClick: () => goToRoute(AppRoutes.adminProductOverview.path),
            },
            {
                name: 'Categories',
                isActive: () => isActivePage(AppRoutes.adminProductCategories.path),
                onClick: () => goToRoute(AppRoutes.adminProductCategories.path),
            },
            {
                name: 'Books',
                isActive: () => isActivePage(AppRoutes.adminProductBooks.path),
                onClick: () => goToRoute(AppRoutes.adminProductBooks.path),
            },
        ]"
    />
    <SidenavItem
        :item="{
            name: 'Invoices',
            icon: 'pi-receipt',
            isActive: () => isActivePage(AppRoutes.adminInvoices.path),
            onClick: () => goToRoute(AppRoutes.adminInvoices.path),
        }"
    />
    <SidenavItem
        :item="{
            name: 'Messages',
            icon: 'pi-comments',
            isActive: () => isActivePage(AppRoutes.adminMessages.path),
            onClick: () => goToRoute(AppRoutes.adminMessages.path),
        }"
    />
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import SidenavItem from './SidenavItem.vue';
    import { AppRoutes } from '@/plugins/router';

    const route = useRoute();
    const router = useRouter();
    const activePage = ref(AppRoutes.adminDashboard.path);

    function goToRoute(appRoute: string) {
        activePage.value = appRoute;
        router.push(activePage.value);
    }

    function isActivePage(appRoute: string) {
        return route.path.toLowerCase().startsWith(appRoute);
    }
</script>
