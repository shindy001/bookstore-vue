<template>
    <PrimeCard class="shadow-none">
        <template #title>
            <div class="h-11">
                <h1>Product Overview</h1>
            </div>
        </template>
        <template #content>
            <PaginatedDataTable :getDataFn="getDataFn">
                <template #columns>
                    <PrimeColumn field="imageUrl" class="w-[64px]">
                        <template #body="slotProps">
                            <img
                                width="64"
                                height="64"
                                :src="
                                    slotProps.data.coverImageUrl
                                        ? slotProps.data.coverImageUrl
                                        : `https://img.icons8.com/officel/80/product.png`
                                "
                                :alt="slotProps.data.image"
                                class="min-w-[64px] rounded"
                            />
                        </template>
                    </PrimeColumn>
                    <PrimeColumn field="name" header="Name" class="w-1/5"></PrimeColumn>
                    <PrimeColumn field="productType" header="ProductType" class="w-1/5"></PrimeColumn>
                    <PrimeColumn field="price" header="Price" class="w-1/5"></PrimeColumn>
                    <PrimeColumn field="discountAmmount" header="Discounted" class="w-1/5">
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
                    <PrimeColumn header="Status" class="w-1/5">
                        <template #body><PrimeTag severity="info" value="In Stock" /></template>
                    </PrimeColumn>
                </template>
            </PaginatedDataTable>
        </template>
    </PrimeCard>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useGetProductsCommand } from '@/commands/products/getProductsCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';

    const error = ref('');
    const checkboxCheckedValue = true;
    const checkboxUncheckedValue = false;
    const getProductsCommand = useGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const getDataFn = (itemsPerPage: number, offset: number) => getProductsCommand(itemsPerPage, offset);
</script>
