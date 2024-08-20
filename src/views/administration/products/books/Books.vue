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
                    <PrimeColumn header="Actions">
                        <template #body="slotProps">
                            <div class="flex gap-2">
                                <!-- TODO - implement ProductCategory edit dialog -->
                                <PrimeButton icon="pi pi-pencil" aria-label="Edit" outlined />
                                <PrimeButton
                                    icon="pi pi-trash"
                                    aria-label="Delete"
                                    outlined
                                    @click="() => confirmBookDeletion(slotProps.data)"
                                />
                            </div>
                        </template>
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

    <ConfirmationDialog
        :visible="showDeleteBookConfirmationDialog"
        :message="`Delete Book ${bookToDelete?.name}?`"
        confirmButtonLabel="Delete"
        @onConfirm="() => onCategoryDeleteConfirmation()"
        @onCancel="showDeleteBookConfirmationDialog = false"
        @visibilityChanged="(value: boolean) => (showDeleteBookConfirmationDialog = value)"
    />
</template>

<!-- :src="
                                    slotProps.data.coverImageUrl
                                        ? slotProps.data.coverImageUrl
                                        : `https://img.icons8.com/wired/64/book.png`
                                " -->
<script setup lang="ts">
    import { ref } from 'vue';
    import { useGetProductsCommand } from '@/commands/products/getProductsCommand';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';
    import CreateBookDialog from './CreateBookDialog.vue';
    import { useToastService } from '@/views/_shared/utils/toastHelper';
    import { BookDto } from '@/api/devbookClient';
    import { useDeleteProductCommand } from '@/commands/products/deleteProductCommand';
    import ConfirmationDialog from '@/views/administration/_components/ConfirmationDialog.vue';

    const toastService = useToastService();
    const error = ref('');
    const booksTableKey = ref(0);
    const showCreateBookDialog = ref(false);
    const bookToDelete = ref<BookDto>();
    const showDeleteBookConfirmationDialog = ref(false);

    const getProductsCommand = useGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const deleteProductCommand = useDeleteProductCommand(
        (errorMessage) => (error.value = errorMessage),
        () => 'Book sucessfully deleted',
    );
    const getDataFn = (itemsPerPage: number, offset: number) => getProductsCommand(itemsPerPage, offset, 'Book');

    function onCreateBook() {
        toastService.showSuccess('Book successfully created.');
        showCreateBookDialog.value = false;
        refreshBooksTable();
    }

    function refreshBooksTable() {
        booksTableKey.value += 1;
    }

    function confirmBookDeletion(book: BookDto) {
        bookToDelete.value = book;
        showDeleteBookConfirmationDialog.value = true;
    }

    async function onCategoryDeleteConfirmation() {
        await deleteProductCommand(bookToDelete.value?.id!);
        showDeleteBookConfirmationDialog.value = false;
        refreshBooksTable();
    }
</script>
