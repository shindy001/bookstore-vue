<script setup lang="ts">
    console.debug('Obligatory script line, otherwise layout auto import wont work.');
</script>

<template>
    <div class="w-full">
        <div class="mx-auto max-w-screen-xl px-2">
            <slot></slot>
        </div>
    </div>
</template>
