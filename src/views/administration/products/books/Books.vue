<template>
    <PrimeCard class="shadow-none">
        <template #title>Books</template>
        <template #content>
            <PaginatedDataTable :getDataFn="getDataFn">
                <template #columns>
                    <PrimeColumn field="imageUrl" class="w-[64px]">
                        <template #body="slotProps">
                            <img
                            width="64" height="64" 
                                :src="`https://img.icons8.com/wired/64/book.png`"
                                :alt="slotProps.data.image"
                                class="min-w-[64px] rounded"
                            />
                        </template>
                    </PrimeColumn>
                    <PrimeColumn field="name" header="Name" class="w-1/6"></PrimeColumn>
                    <PrimeColumn field="author" header="Author" class="w-1/6"></PrimeColumn>
                    <PrimeColumn field="description" header="Description" class="w-1/6"></PrimeColumn>
                    <PrimeColumn field="price" header="Price" class="w-1/12"></PrimeColumn>
                    <PrimeColumn field="retailPrice" header="Retail Price" class="w-1/12"></PrimeColumn>
                    <PrimeColumn field="discountAmmount" header="Discount" class="w-1/12" />
                    <PrimeColumn header="Status" class="w-1/6">
                        <template #body><PrimeTag severity="info" value="In Stock" /></template>
                    </PrimeColumn>
                </template>
            </PaginatedDataTable>
        </template>
    </PrimeCard>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { createGetProductsCommand } from '@/commands/products/getProductsCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';

    const error = ref('');
    const getProductsCommand = createGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const getDataFn = (itemsPerPage: number, offset: number) => getProductsCommand(itemsPerPage, offset, "Book");
</script>
