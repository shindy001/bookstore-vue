<template>
    <PrimeCard class="shadow-none">
        <template #title>
            <div class="flex justify-between">
                <span>Product Categories</span>
                <PrimeButton label="Create Category" @click="() => (showCreateProductCategoryDialog = true)" />
            </div>
        </template>
        <template #content>
            <PaginatedDataTable :key="productCategoriesTableKey" :getDataFn="getDataFn">
                <template #columns>
                    <PrimeColumn field="name" header="Name" class="w-1/6"></PrimeColumn>
                    <PrimeColumn field="isTopLevelCategory" header="IsTopLevelCategory" class="w-1/5 sm:w-1/6">
                        <template #body="slotProps">
                            <PrimeCheckbox v-model="slotProps.data.isTopLevelCategory" binary disabled />
                        </template>
                    </PrimeColumn>
                    <PrimeColumn field="subcategories" header="Subcategories" class="w-1/6" />
                </template>
            </PaginatedDataTable>
        </template>
    </PrimeCard>
    <CreateProductCategoryDialog
        :visible="showCreateProductCategoryDialog"
        @onCreate="() => onCreateCategory()"
        @onCancel="showCreateProductCategoryDialog = false"
        @visibilityChanged="(value: boolean) => (showCreateProductCategoryDialog = value)"
    />
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { createGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';
    import CreateProductCategoryDialog from './CreateProductCategoryDialog.vue';
    import { useToastService } from '@/views/_shared/utils/toastHelper';

    const productCategoriesTableKey = ref(0);
    const showCreateProductCategoryDialog = ref(false);
    const toastService = useToastService();
    const getProductCategoriesCommand = createGetProductCategoriesCommand((errorMessage) =>
        toastService.showError(`Error while fetching categories: ${errorMessage}`),
    );

    const getDataFn = (itemsPerPage: number, offset: number) => getProductCategoriesCommand(itemsPerPage, offset);

    function onCreateCategory() {
        toastService.showSuccess('Category successfully created.');
        showCreateProductCategoryDialog.value = false;
        refreshProductCategoriesTable();
    }

    function refreshProductCategoriesTable() {
        productCategoriesTableKey.value += 1;
    }
</script>
