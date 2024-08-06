<template>
    <SidenavItem
        :item="{
            name: 'Dashboard',
            icon: 'pi-th-large',
            isActive: () => activePage === Page.Dashboard,
            onClick: () => setActivePage(Page.Dashboard),
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
                isActive: () => activePage === Page.ProductOverview,
                onClick: () => setActivePage(Page.ProductOverview),
            },
            {
                name: 'Categories',
                isActive: () => activePage === Page.ProductCategories,
                onClick: () => setActivePage(Page.ProductCategories),
            },
        ]"
    />
    <SidenavItem
        :item="{
            name: 'Invoices',
            icon: 'pi-receipt',
            isActive: () => activePage === Page.Invoices,
            onClick: () => setActivePage(Page.Invoices),
        }"
    />
    <SidenavItem
        :item="{
            name: 'Messages',
            icon: 'pi-comments',
            isActive: () => activePage === Page.Messages,
            onClick: () => setActivePage(Page.Messages),
        }"
    />
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import SidenavItem from './SidenavItem.vue';
    import { Page } from '@/views/administration/_common/types';

    const activePage = ref(Page.Dashboard);

    const emit = defineEmits<{
        (e: 'page-selected', value: Page): void;
    }>();

    function setActivePage(page: Page) {
        activePage.value = page;
        emit('page-selected', page);
    }
</script>
