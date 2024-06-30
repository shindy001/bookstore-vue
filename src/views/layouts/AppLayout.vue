<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <header>
                <AppBar />
                <Menu />
            </header>

            <div>
                <div class="mx-auto max-w-screen-xl px-2">
                    <slot></slot>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import AppBar from '@/components/AppBar.vue';
    import Menu from '@/components/Menu.vue';
    import Footer from '@/components/Footer.vue';
</script>
