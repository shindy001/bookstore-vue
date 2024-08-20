<template>
    <PrimeCard class="shadow-none">
        <template #title>
            <div class="flex justify-between">
                <span>Books</span>
                <PrimeButton label="Create Book" @click="() => (showCreateBookDialog = true)" />
            </div>
        </template>
        <template #content>
            <PaginatedDataTable :getDataFn="getDataFn" :key="booksTableKey">
                <template #columns>
                    <PrimeColumn field="imageUrl" class="w-[64px]">
                        <template #body="slotProps">
                            <img
                                width="64"
                                height="64"
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
    <CreateBookDialog
        :visible="showCreateBookDialog"
        @onCreate="() => onCreateBook()"
        @onCancel="showCreateBookDialog = false"
        @visibilityChanged="(value: boolean) => (showCreateBookDialog = value)"
    />
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useGetProductsCommand } from '@/commands/products/getProductsCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';
    import CreateBookDialog from './CreateBookDialog.vue';
    import { useToastService } from '@/views/_shared/utils/toastHelper';

    const error = ref('');
    const booksTableKey = ref(0);
    const showCreateBookDialog = ref(false);
    const toastService = useToastService();
    const getProductsCommand = useGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const getDataFn = (itemsPerPage: number, offset: number) => getProductsCommand(itemsPerPage, offset, 'Book');

    function onCreateBook() {
        toastService.showSuccess('Book successfully created.');
        showCreateBookDialog.value = false;
        refreshBooksTable();
    }

    function refreshBooksTable() {
        booksTableKey.value += 1;
    }
</script>
