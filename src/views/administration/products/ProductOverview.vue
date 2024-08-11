<template>
    <PrimeCard class="shadow-none">
        <template #title>Product Overview</template>
        <template #content>
            <PaginatedDataTable :itemsPerPage="24" :getDataFn="getDataFn">
                <template #columns>
                    <PrimeColumn field="imageUrl" class="w-24">
                        <template #body="slotProps">
                            <img
                                :src="`https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg`"
                                :alt="slotProps.data.image"
                                class="w-[90px] rounded"
                            />
                        </template>
                    </PrimeColumn>
                    <PrimeColumn field="name" header="Name" class="w-1/6"></PrimeColumn>
                    <PrimeColumn field="productType" header="ProductType" class="w-1/5 sm:w-1/6"></PrimeColumn>
                    <PrimeColumn field="price" header="Price" class="w-1/5 sm:w-1/6"></PrimeColumn>
                    <PrimeColumn field="discountAmmount" header="Discounted" class="w-1/5 sm:w-1/6">
                        <template #body="slotProps">
                            <PrimeCheckbox
                                v-if="slotProps.data.discountAmmount > 0"
                                v-model="checkboxCheckedValue"
                                binary
                                disabled
                            />
                            <PrimeCheckbox v-else v-model="checkboxUncheckedValue" binary disabled />
                        </template>
                    </PrimeColumn>
                    <PrimeColumn header="Status" class="w-1/5 sm:w-1/6">
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
    const checkboxCheckedValue = true;
    const checkboxUncheckedValue = false;
    const getProductsCommand = createGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const getDataFn = (itemsPerPage: number, offset: number) => getProductsCommand(itemsPerPage, offset);
</script>
