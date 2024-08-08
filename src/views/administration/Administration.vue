<template>
    <div class="flex h-full">
        <div class="bg-[#2f49d1] min-w-[300px] h-full text-[#8192e2] flex flex-col gap-2">
            <RouterLink to="/" class="my-4 h-16 text-white flex items-center justify-center">
                <LibraryBig :size="32" class="inline mr-2" />
                <span class="text-2xl font-semibold">BookStore</span>
            </RouterLink>

            <Sidenav @page-selected="(page: Page) => setActivePage(page)" />
        </div>
        <div class="p-4 bg-[#f4f5f7] w-full">
            <component :is="pageComponentMap[activePage]" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { LibraryBig } from 'lucide-vue-next';
    import Dashboard from './dashboard/Dashboard.vue';
    import Overview from './products/Overview.vue';
    import Categories from './products/Categories.vue';
    import Invoices from './invoices/Invoices.vue';
    import Messages from './messages/Messages.vue';
    import Sidenav from '@/views/administration/_components/Sidenav.vue';
    import { Page } from '@/views/administration/_common/types';

    const pageComponentMap = {
        [Page.Dashboard]: Dashboard,
        [Page.ProductOverview]: Overview,
        [Page.ProductCategories]: Categories,
        [Page.Invoices]: Invoices,
        [Page.Messages]: Messages,
    };

    const activePage = ref<Page>(Page.Dashboard);

    async function setActivePage(page: Page) {
        activePage.value = page;
    }
</script>
