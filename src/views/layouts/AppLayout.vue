<template>
    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
    </nav>
    <slot></slot>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>
