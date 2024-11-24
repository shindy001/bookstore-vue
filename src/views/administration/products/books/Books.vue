<template>
    <PrimeCard class="shadow-none">
        <template #title>
            <div class="flex justify-between h-11">
                <h1>Books</h1>
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
                                :src="
                                    slotProps.data.coverImageUrl
                                        ? slotProps.data.coverImageUrl
                                        : bookPlaceholder
                                "
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
                                <PrimeButton
                                    icon="pi pi-pencil"
                                    aria-label="Edit"
                                    outlined
                                    @click="() => {
                                      bookIdToUpdate = slotProps.data.id;
                                      updateBookDialogKey += 1;
                                      showUpdateBookDialog = true;
                                    }"
                                />
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
        :key="createBookDialogKey"
        :visible="showCreateBookDialog"
        @onCreate="() => onCreateBook()"
        @onCancel="showCreateBookDialog = false"
        @visibilityChanged="(value: boolean) => (showCreateBookDialog = value)"
    />

    <UpdateBookDialog
        :id="bookIdToUpdate"
        :key="updateBookDialogKey"
        :visible="showUpdateBookDialog"
        @onUpdate="() => onUpdateBook()"
        @onCancel="showUpdateBookDialog = false"
        @visibilityChanged="(value: boolean) => (showUpdateBookDialog = value)"
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

<script setup lang="ts">
    import { ref } from 'vue';
    import { useToastService } from '@/views/_shared/utils/toastHelper';
    import { useGetProductsCommand } from '@/commands/products/getProductsCommand';
    import { useDeleteProductCommand } from '@/commands/products/deleteProductCommand';
    import { BookDto } from '@/api/devbookClient';
    import PaginatedDataTable from '@/views/administration/_components/PaginatedDataTable.vue';
    import CreateBookDialog from './CreateBookDialog.vue';
    import UpdateBookDialog from './UpdateBookDialog.vue';
    import ConfirmationDialog from '@/views/administration/_components/ConfirmationDialog.vue';
    import bookPlaceholder from '@/assets/book_placeholder.png';

    const toastService = useToastService();
    const error = ref('');
    const booksTableKey = ref(0);
    const createBookDialogKey = ref(0);
    const updateBookDialogKey = ref(0);
    
    const showCreateBookDialog = ref(false);
    const showUpdateBookDialog = ref(false);
    const showDeleteBookConfirmationDialog = ref(false);
    const bookToDelete = ref<BookDto>();
    const bookIdToUpdate = ref<string>("");

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

    function onUpdateBook() {
      toastService.showSuccess('Book successfully updated.');
      showUpdateBookDialog.value = false;
      refreshBooksTable();
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

    function refreshBooksTable() {
      booksTableKey.value += 1;
      createBookDialogKey.value += 1;
      updateBookDialogKey.value += 1;
    }
</script>
