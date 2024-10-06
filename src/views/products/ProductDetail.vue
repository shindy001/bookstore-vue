<template>
    <h1>This is a product {{ productId }} detail</h1>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const productId = route.params.id as string;
</script>
