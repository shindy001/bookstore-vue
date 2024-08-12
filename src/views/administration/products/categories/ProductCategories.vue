<template>
    <PrimeCard class="shadow-none">
        <template #title>Product Categories</template>
        <template #content>
            <PaginatedDataTable :getDataFn="getDataFn">
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
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { createGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';

    const error = ref('');
    const getProductCategoriesCommand = createGetProductCategoriesCommand(
        (errorMessage) => (error.value = errorMessage),
    );

    const getDataFn = (itemsPerPage: number, offset: number) => getProductCategoriesCommand(itemsPerPage, offset);
</script>
