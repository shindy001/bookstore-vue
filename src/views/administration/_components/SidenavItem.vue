<template>
    <div
        @click="() => onMainItemClick()"
        class="sidenav-item flex pl-20 py-2 text-left cursor-pointer gap-2"
        :class="props.item.isActive?.() || dropdownIsVisible ? getMainItemClasses() : ''"
    >
        <i v-if="props.item.icon" class="pi" :class="props.item.icon" style="font-size: 1.4rem"></i>
        <span>{{ props.item.name }}</span>
    </div>
    <div v-if="props.submenuItems && dropdownIsVisible" class="flex flex-col gap-2">
        <div
            v-for="submenuItem in props.submenuItems"
            class="sidenav-item flex gap-2 pl-32 py-2 text-left cursor-pointer"
            :class="submenuItem.isActive?.() ? 'active-item' : ''"
            @click="() => onSubmenuItemClick(submenuItem)"
        >
            <i v-if="submenuItem.icon" class="pi" :class="props.item.icon" style="font-size: 1.4rem"></i>
            <span>{{ submenuItem.name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    export interface SidenavItem {
        name: string;
        icon?: string;
        isActive?: () => boolean;
        onClick?: () => void;
    }

    export interface Props {
        item: SidenavItem;
        submenuItems?: SidenavItem[];
    }

    const props = defineProps<Props>();
    const dropdownIsVisible = ref(false);

    onMounted(() => {
        if (props.submenuItems?.find((x) => x.isActive?.() === true)) {
            dropdownIsVisible.value = true;
        }
    });

    function onMainItemClick() {
        dropdownIsVisible.value = !dropdownIsVisible.value;
        props.item.onClick?.();
    }

    function onSubmenuItemClick(item: SidenavItem) {
        item.onClick?.();
    }

    function getMainItemClasses() {
        let classes = '';
        if (props.item.isActive?.()) {
            classes += 'active-item ';
        }

        if (props.submenuItems && dropdownIsVisible) {
            classes += 'toggled-item ';
        }
        return classes;
    }
</script>

<style scoped>
    .sidenav-item:hover {
        color: white;
        background-color: #7788e0;
    }

    .active-item {
        color: white;
        background-color: #7788e0;
    }

    .toggled-item {
        color: white;
    }
</style>
