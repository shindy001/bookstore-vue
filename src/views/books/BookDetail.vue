<template>
    <h1>This is a book {{ bookId }} detail</h1>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const bookId = route.params.id as string;
</script>
