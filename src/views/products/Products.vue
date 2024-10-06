<template>
    <h1>Product category {{ productCategoryId }} overview</h1>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const productCategoryId = route.params.id as string;
</script>
