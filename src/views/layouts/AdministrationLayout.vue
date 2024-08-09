<template>
    <div class="min-h-screen grid grid-cols-1 grid-rows-1">
        <div class="flex h-full">
            <div class="bg-blue-700 min-w-[300px] h-full text-[#8192e2] flex flex-col gap-2">
                <RouterLink to="/" class="my-4 h-16 text-white flex items-center justify-center">
                    <LibraryBig :size="32" class="inline mr-2" />
                    <span class="text-2xl font-semibold">BookStore</span>
                </RouterLink>

                <Sidenav />
            </div>
            <div class="p-4 bg-gray-100 w-full">
                <slot></slot>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import { LibraryBig } from 'lucide-vue-next';
    import Sidenav from '@/views/administration/_components/Sidenav.vue';
    import Footer from '@/shared_components/Footer.vue';
</script>
