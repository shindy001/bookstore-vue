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
                    <PrimeColumn field="subcategories" header="Subcategories" class="w-1/6">
                        <template #body="slotProps">
                            <p>{{ getSubcategoriesColumnValue(slotProps.data.subcategories) }}</p>
                        </template>
                    </PrimeColumn>
                </template>
            </PaginatedDataTable>
        </template>
    </PrimeCard>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { createGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';
    import { type ProductCategoryDto } from '@/api/devbookClient';

    const error = ref('');
    const cashedCategories = ref<ProductCategoryDto[] | undefined>();
    const getProductCategoriesCommand = createGetProductCategoriesCommand(
        (errorMessage) => (error.value = errorMessage),
    );

    const getDataFn = (itemsPerPage: number, offset: number) => getProductCategoriesCommand(itemsPerPage, offset);

    initialize();

    async function initialize() {
        cashedCategories.value = await getProductCategoriesCommand(100, 0);
    }

    // TODO - return Subcategories from server as array of string names
    function getSubcategoriesColumnValue(categoryIds?: Array<string>): string {
        if (!categoryIds) {
            return 'No subcategories';
        }

        var subcategories = cashedCategories.value?.filter((x) => categoryIds.includes(x.id)).map((x) => x.name);
        return subcategories?.join(', ') ?? 'No subcategories';
    }
</script>
