<template>
    <PrimeDataTable :value="products" lazy class="h-[calc(100vh-230px)] overflow-y-auto">
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

        <slot name="columns"></slot>
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
            class="bg-blue-700 border-none"
            :class="nextButtonDisabled ? '' : 'hover:bg-blue-900'"
            :disabled="nextButtonDisabled"
            @click="() => nextPage()"
        />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useToastService } from '@/views/_shared/utils/toastHelper';

    const props = defineProps<{
        getDataFn: (itemsPerPage: number, offset: number) => Promise<any>;
        itemsPerPage?: number;
    }>();

    const loading = ref(false);
    const products = ref();
    const prevButtonDisabled = ref(true);
    const nextButtonDisabled = ref(false);
    const currentPage = ref(0);
    const itemsPerPage = props.itemsPerPage ?? 12;
    const toastService = useToastService();

    initialize();

    async function initialize() {
        loading.value = true;
        products.value = await props.getDataFn(itemsPerPage, itemsPerPage * currentPage.value);
        nextButtonDisabled.value = products.value.length < itemsPerPage;
        loading.value = false;
    }

    async function nextPage() {
        loading.value = true;
        const result = await props.getDataFn(itemsPerPage, itemsPerPage * (currentPage.value + 1));
        if (result && result?.length > 0) {
            products.value = result;
            currentPage.value += 1;
            nextButtonDisabled.value = products.value.length < itemsPerPage;
            prevButtonDisabled.value = false;
        } else {
            nextButtonDisabled.value = true;
            toastService.showInfo('No other items found.');
        }
        loading.value = false;
    }

    async function prevPage() {
        loading.value = true;
        const result = await props.getDataFn(itemsPerPage, itemsPerPage * (currentPage.value - 1));
        if (result && result?.length > 0) {
            products.value = result;
            currentPage.value -= 1;
            nextButtonDisabled.value = false;
            prevButtonDisabled.value = currentPage.value <= 0;
        } else {
            prevButtonDisabled.value = true;
        }
        loading.value = false;
    }
</script>
