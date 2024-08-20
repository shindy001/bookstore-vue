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
                    <PrimeColumn field="name" header="Name"></PrimeColumn>
                    <PrimeColumn field="isTopLevelCategory" header="IsTopLevelCategory">
                        <template #body="slotProps">
                            <PrimeCheckbox v-model="slotProps.data.isTopLevelCategory" binary disabled />
                        </template>
                    </PrimeColumn>
                    <PrimeColumn field="subcategories" header="Subcategories" />
                    <PrimeColumn header="Actions">
                        <template #body="slotProps">
                            <div class="flex gap-2">
                                <!-- TODO - implement ProductCategory edit dialog -->
                                <PrimeButton icon="pi pi-pencil" aria-label="Edit" outlined />
                                <PrimeButton
                                    icon="pi pi-trash"
                                    aria-label="Delete"
                                    outlined
                                    @click="() => confirmCategoryDeletion(slotProps.data)"
                                />
                            </div>
                        </template>
                    </PrimeColumn>
                </template>
            </PaginatedDataTable>
        </template>
    </PrimeCard>
    <CreateProductCategoryDialog
        :key="productCategoriesTableKey"
        :visible="showCreateProductCategoryDialog"
        @onCreate="() => onCreateCategory()"
        @onCancel="showCreateProductCategoryDialog = false"
        @visibilityChanged="(value: boolean) => (showCreateProductCategoryDialog = value)"
    />

    <ConfirmationDialog
        :visible="showDeleteCategoryConfirmationDialog"
        :message="`Delete category ${categoryToDelete?.name}?`"
        confirmButtonLabel="Delete"
        @onConfirm="() => onCategoryDeleteConfirmation()"
        @onCancel="showDeleteCategoryConfirmationDialog = false"
        @visibilityChanged="(value: boolean) => (showDeleteCategoryConfirmationDialog = value)"
    />
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { useDeleteProductCategoryCommand } from '@/commands/products/deleteProductCategoryCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';
    import CreateProductCategoryDialog from './CreateProductCategoryDialog.vue';
    import { useToastService } from '@/views/_shared/utils/toastHelper';
    import ConfirmationDialog from '@/views/administration/_components/ConfirmationDialog.vue';
    import { ProductCategoryDto } from '@/api/devbookClient';

    const categoryToDelete = ref<ProductCategoryDto>();
    const showDeleteCategoryConfirmationDialog = ref(false);

    const productCategoriesTableKey = ref(0);
    const createProductCategoryDialogKey = ref(0);
    const showCreateProductCategoryDialog = ref(false);
    const toastService = useToastService();
    const getProductCategoriesCommand = useGetProductCategoriesCommand((errorMessage) =>
        toastService.showError(`Error while fetching categories: ${errorMessage}`),
    );

    const deleteProductCategoriesCommand = useDeleteProductCategoryCommand((errorMessage) =>
        toastService.showError(`Error while deleting category: ${errorMessage}`),
    );

    const getDataFn = (itemsPerPage: number, offset: number) => getProductCategoriesCommand(itemsPerPage, offset);

    function onCreateCategory() {
        toastService.showSuccess('Category successfully created.');
        showCreateProductCategoryDialog.value = false;
        refreshProductCategoriesTable();
    }

    function confirmCategoryDeletion(category: ProductCategoryDto) {
        categoryToDelete.value = category;
        showDeleteCategoryConfirmationDialog.value = true;
    }

    async function onCategoryDeleteConfirmation() {
        await deleteProductCategoriesCommand(categoryToDelete.value?.id!).then(() =>
            toastService.showSuccess('Category deleted.'),
        );
        showDeleteCategoryConfirmationDialog.value = false;
        refreshProductCategoriesTable();
    }

    function refreshProductCategoriesTable() {
        productCategoriesTableKey.value += 1;
        createProductCategoryDialogKey.value += 1;
    }
</script>
