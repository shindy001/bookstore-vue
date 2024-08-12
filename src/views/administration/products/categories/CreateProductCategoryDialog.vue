<template>
    <PrimeDialog
        modal
        header="Create Product Category"
        :style="{ width: '35rem' }"
        @update:visible="(visible: boolean) => emit('visibilityChanged', visible)"
    >
        <div class="flex items-center gap-4 mb-4">
            <label for="name" class="font-semibold min-w-40">Name</label>
            <PrimeInputText v-model="name" id="name" class="flex-auto" autocomplete="off" required />
        </div>
        <div class="flex items-center gap-4 mb-4">
            <label for="isTopLevelCategory" class="font-semibold min-w-40">Is top level category</label>
            <PrimeCheckbox v-model="isTopLevelCategory" id="isTopLevelCategory" :binary="true" />
        </div>
        <div class="flex items-center gap-4 mb-8">
            <label for="subcategories" class="font-semibold min-w-40">Subcategories</label>
            <PrimeMultiSelect
                v-model="subcategories"
                display="chip"
                :options="subcategoriesOptions"
                optionLabel="name"
                placeholder="Select Subcategories"
                :maxSelectedLabels="3"
                class="w-full"
            />
        </div>
        <div class="flex justify-end gap-2">
            <PrimeButton type="button" label="Cancel" severity="secondary" @click="() => onCancel()"></PrimeButton>
            <PrimeButton type="button" label="Create" @click="() => onCreate()"></PrimeButton>
        </div>
    </PrimeDialog>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { createCreateProductCategoryCommand } from '@/commands/products/createProductCategoryCommand';
    import { createGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { ProductCategoryDto } from '@/api/devbookClient';
    import { useToastService } from '@/views/_shared/utils/toastHelper';

    const name = ref('');
    const isTopLevelCategory = ref(false);
    const subcategories = ref<Array<ProductCategoryDto>>();
    const subcategoriesOptions = ref<Array<ProductCategoryDto>>();
    const toastService = useToastService();

    const emit = defineEmits<{
        (e: 'onCreate'): void;
        (e: 'onCancel'): void;
        (e: 'visibilityChanged', value: boolean): void;
    }>();

    const getProductCategoriesCommand = createGetProductCategoriesCommand((errorMessage) =>
        toastService.showError(`Error while fetching categories: ${errorMessage}`),
    );
    const createProductCategoryCommand = createCreateProductCategoryCommand((errorMessage) =>
        toastService.showError(`Error while creating category: ${errorMessage}`),
    );

    initialize();

    async function initialize() {
        const productCategories = await getProductCategoriesCommand();
        subcategoriesOptions.value = productCategories?.filter((x) => !x.isTopLevelCategory) ?? [];
    }

    async function onCreate() {
        await createProductCategoryCommand({
            name: name.value,
            isTopLevelCategory: isTopLevelCategory.value,
            subcategories: subcategories?.value?.map((x) => x.id),
        }).then(() => emit('onCreate'));
    }

    async function onCancel() {
        emit('onCancel');
    }
</script>
