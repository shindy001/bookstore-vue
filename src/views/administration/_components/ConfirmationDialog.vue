<template>
    <PrimeDialog
        modal
        header="Confirmation"
        :style="{ width: '35rem' }"
        @update:visible="(visible: boolean) => $emit('visibilityChanged', visible)"
    >
        <p>{{ props.message }}</p>
        <div class="flex justify-end gap-2">
            <PrimeButton type="button" label="Cancel" severity="secondary" @click="$emit('onCancel')"></PrimeButton>
            <PrimeButton type="button" :label="props.confirmButtonLabel" @click="$emit('onConfirm')"></PrimeButton>
        </div>
    </PrimeDialog>
</template>

<script setup lang="ts">
    const props = withDefaults(defineProps<{
        message: string,
        confirmButtonLabel: string,
    }>(), {
        confirmButtonLabel: "Yes"
    });

</script>
