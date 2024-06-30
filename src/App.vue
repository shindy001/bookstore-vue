<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <header>
                <AppBar />
                <Menu />
            </header>

            <component :is="layout">
                <RouterView />
            </component>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import AppBar from '@/components/AppBar.vue';
    import Menu from '@/components/Menu.vue';
    import Footer from '@/views/components/Footer.vue';

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
