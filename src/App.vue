<template>
    <component :is="layout">
        <RouterView :key="route.fullPath" />
    </component>
    <PrimeToast position="top-right" />
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    /**
    * Sets layout according to passed layout name in route.meta.layout property
    * Falls back to default layout "AppLayout" when meta property is not specified
    * If you need to override default layout, set meta layout property in router:
    * meta: {
        layout: "EmptyLayout"
      }
    */
    const layout = computed(() => {
        let layoutName = route?.meta?.layout;

        if (!layoutName) {
            layoutName = 'AppLayout';
        }

        return layoutName;
    });
</script>
