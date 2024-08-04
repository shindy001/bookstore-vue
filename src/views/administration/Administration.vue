<template>
    <div class="flex h-full">
        <div class="bg-[#2f49d1] w-[300px] h-full text-[#8192e2] flex flex-col gap-2">
            <RouterLink to="/" class="w-full my-4 h-16 text-white flex items-center justify-center">
                <LibraryBig :size="32" class="inline mr-2" />
                <span class="text-2xl font-semibold">BookStore</span>
            </RouterLink>
            <div
                class="pl-20 flex py-2 hover:bg-[#7788e0] hover:text-white cursor-pointer"
                :class="activePage === Page.Dashboard ? 'bg-[#7788e0] text-white' : ''"
                @click="() => setActivePage(Page.Dashboard)"
            >
                <House :size="24" class="inline mr-2" />
                <span>Dashboard</span>
            </div>
            <div
                class="pl-20 flex py-2 hover:bg-[#7788e0] hover:text-white cursor-pointer"
                :class="activePage === Page.Products ? 'bg-[#7788e0] text-white' : ''"
                @click="() => setActivePage(Page.Products)"
            >
                <PackageSearch :size="24" class="inline mr-2" />
                <span>Products</span>
            </div>
            <div
                class="pl-20 flex py-2 hover:bg-[#7788e0] hover:text-white cursor-pointer"
                :class="activePage === Page.Invoices ? 'bg-[#7788e0] text-white' : ''"
                @click="() => setActivePage(Page.Invoices)"
            >
                <Receipt :size="24" class="inline mr-2" />
                <span>Invoices</span>
            </div>
            <div
                class="pl-20 flex py-2 hover:bg-[#7788e0] hover:text-white cursor-pointer"
                :class="activePage === Page.Messages ? 'bg-[#7788e0] text-white' : ''"
                @click="() => setActivePage(Page.Messages)"
            >
                <MessageSquareMore :size="24" class="inline mr-2" />
                <span>Messages</span>
            </div>
        </div>
        <component :is="pageComponentMap[activePage]" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { LibraryBig, PackageSearch, House, Receipt, MessageSquareMore } from 'lucide-vue-next';
    import Dashboard from './dashboard/Dashboard.vue';
    import Products from './products/Products.vue';
    import Invoices from './invoices/Invoices.vue';
    import Messages from './messages/Messages.vue';

    enum Page {
        Dashboard,
        Products,
        Invoices,
        Messages,
    }

    const pageComponentMap = {
        [Page.Dashboard]: Dashboard,
        [Page.Products]: Products,
        [Page.Invoices]: Invoices,
        [Page.Messages]: Messages,
    };

    const activePage = ref(Page.Dashboard);

    async function setActivePage(page: Page) {
        activePage.value = page;
    }
</script>
