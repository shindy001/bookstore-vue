<template>
    <div class="min-h-screen grid grid-cols-1 grid-rows-1">
        <slot></slot>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import Footer from '@/shared_components/Footer.vue';

    console.debug('Obligatory script line, otherwise layout auto import wont work.');
</script>
