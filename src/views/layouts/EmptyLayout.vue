<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <slot></slot>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import Footer from '@/components/Footer.vue';

    console.debug('Obligatory script line, otherwise layout auto import wont work.');
</script>
