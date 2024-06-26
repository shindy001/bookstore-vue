<template>
    <div class="h-full flex flex-col justify-between">
        <slot></slot>

        <Footer />
    </div>
</template>

<script setup lang="ts">
    console.debug('Obligatory script line, otherwise layout auto import wont work.');

    import Footer from '@/views/components/Footer.vue';
</script>
