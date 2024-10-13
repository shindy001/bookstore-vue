<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <header>
                <AppBar />
                <Menu />
            </header>
            <slot></slot>
        </div>
        <div class="mt-12">
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts">
    import AppBar from '@/shared_components/AppBar.vue';
    import Menu from '@/shared_components/Menu.vue';
    import Footer from '@/shared_components/Footer.vue';
</script>
