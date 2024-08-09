<template>
    <PrimeCard class="shadow-none">
        <template #title>Product Overview</template>
        <template #content>
            <PrimeDataTable :value="products" lazy class="h-[calc(100vh-220px)] overflow-y-auto">
                <template #empty>
                    <p>No products to show.</p>
                </template>

                <template #paginatorprevpagelinkicon>
                    <div class="rounded flex mr-8">
                        <i class="pi pi-angle-left text-lg"></i>
                        <span>Prev</span>
                    </div>
                </template>
                <template #paginatornextpagelinkicon>
                    <div class="rounded flex">
                        <span>Next</span>
                        <i class="pi pi-angle-right text-lg"></i>
                    </div>
                </template>

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
                <PrimeColumn field="description" header="Description" class="w-1/5 sm:w-1/6"></PrimeColumn>
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
            </PrimeDataTable>
            <div class="pt-2 flex gap-8 justify-center">
                <PrimeButton
                    label="Prev"
                    icon="pi pi-angle-left"
                    class="bg-blue-700 border-none"
                    :class="prevButtonDisabled ? '' : 'hover:bg-blue-900'"
                    :disabled="prevButtonDisabled"
                    @click="() => prevPage()"
                />
                <PrimeButton
                    label="Next"
                    icon="pi pi-angle-right"
                    iconPos="right"
                    class="bg-blue-700 border-none hover:bg-blue-900"
                    :class="nextButtonDisabled ? '' : 'hover:bg-blue-900'"
                    :disabled="nextButtonDisabled"
                    @click="() => nextPage()"
                />
            </div>
        </template>
    </PrimeCard>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { createGetProductsCommand } from '@/commands/products/getProductsCommand';

    const error = ref('');
    const loading = ref(false);
    const products = ref();
    const checkboxCheckedValue = true;
    const checkboxUncheckedValue = false;
    const prevButtonDisabled = ref(true);
    const nextButtonDisabled = ref(false);
    const currentPage = ref(0);
    const productsPerPage = 12;
    const getProductsCommand = createGetProductsCommand((errorMessage) => (error.value = errorMessage));

    getProducts();

    async function getProducts() {
        loading.value = true;
        products.value = await getProductsCommand(productsPerPage, productsPerPage * currentPage.value);
        loading.value = false;
    }

    async function nextPage() {
        const result = await getProductsCommand(productsPerPage, productsPerPage * (currentPage.value + 1));
        if (result && result?.length > 0) {
            products.value = result;
            currentPage.value += 1;
            prevButtonDisabled.value = false;
        } else {
            nextButtonDisabled.value = true;
        }
    }

    async function prevPage() {
        const result = await getProductsCommand(productsPerPage, productsPerPage * (currentPage.value - 1));
        if (result && result?.length > 0) {
            products.value = result;
            currentPage.value -= 1;
            nextButtonDisabled.value = false;
            prevButtonDisabled.value = currentPage.value <= 0;
        } else {
            prevButtonDisabled.value = true;
        }
    }
</script>
