<template>
    <PrimeDialog
        modal
        header="Create Book"
        :style="{ width: '35rem' }"
        @update:visible="(visible: boolean) => emit('visibilityChanged', visible)"
    >
        <form @submit="onSubmit">
            <div class="flex flex-col gap-3">
                <div>
                    <label for="name" class="font-semibold after:content-['*'] after:ml-0.5 after:text-red-600"
                        >Name</label
                    >
                    <div>
                        <PrimeInputText
                            v-model="name"
                            aria-describedby="name-help"
                            class="w-full"
                            :class="{ 'p-invalid': errors.name }"
                        />
                        <small id="name-help" class="block text-red-600">
                            {{ errors.name }}
                        </small>
                    </div>
                </div>
                <div>
                    <label for="author" class="font-semibold">Author</label>
                    <PrimeInputText
                        v-model="author"
                        aria-describedby="author-help"
                        class="w-full"
                        :class="{ 'p-invalid': errors.author }"
                    />
                    <small id="author-help" class="block text-red-600">
                        {{ errors.author }}
                    </small>
                </div>
                <div>
                    <label for="description" class="font-semibold">Description</label>
                    <PrimeTextArea
                        v-model="description"
                        autoResize
                        rows="3"
                        aria-describedby="description-help"
                        id="description"
                        class="w-full"
                        :class="{ 'p-invalid': errors.description }"
                    />
                    <small id="description-help" class="block text-red-600">
                        {{ errors.description }}
                    </small>
                </div>
                <div>
                    <label for="coverImageUrl" class="font-semibold">Cover Image Url</label>
                    <PrimeInputText
                        v-model="coverImageUrl"
                        aria-describedby="coverImageUrl-help"
                        class="w-full"
                        :class="{ 'p-invalid': errors.coverImageUrl }"
                    />
                    <small id="coverImageUrl-help" class="block text-red-600">
                        {{ errors.coverImageUrl }}
                    </small>
                </div>
                <div>
                    <label for="retailPrice" class="font-semibold after:content-['*'] after:ml-0.5 after:text-red-600"
                        >Retail Price</label
                    >
                    <PrimeInputNumber
                        v-model="retailPrice"
                        aria-describedby="retailPrice-help"
                        id="retailPrice"
                        class="w-full"
                        :class="{ 'p-invalid': errors.retailPrice }"
                        mode="currency"
                        currency="USD"
                        :step="0.25"
                        fluid
                        showButtons
                        :min="0"
                    />
                    <small id="retailPrice-help" class="block text-red-600">
                        {{ errors.retailPrice }}
                    </small>
                </div>
                <div>
                    <label for="price" class="font-semibold after:content-['*'] after:ml-0.5 after:text-red-600"
                        >Price</label
                    >
                    <PrimeInputNumber
                        v-model="price"
                        aria-describedby="price-help"
                        class="w-full"
                        :class="{ 'p-invalid': errors.price }"
                        mode="currency"
                        currency="USD"
                        :step="0.25"
                        fluid
                        showButtons
                        :min="0.1"
                    />
                    <small id="price-help" class="block text-red-600">
                        {{ errors.price }}
                    </small>
                </div>
                <div>
                    <label
                        for="discountAmount"
                        class="font-semibold after:content-['*'] after:ml-0.5 after:text-red-600"
                        >Discount Amount</label
                    >
                    <PrimeInputNumber
                        v-model="discountAmount"
                        aria-describedby="discountAmount-help"
                        class="w-full"
                        :class="{ 'p-invalid': errors.discountAmmount }"
                        mode="currency"
                        currency="USD"
                        :step="0.25"
                        fluid
                        showButtons
                        :min="0"
                    />
                    <small id="discountAmount-help" class="block text-red-600">
                        {{ errors.discountAmmount }}
                    </small>
                </div>
                <div>
                    <label for="productCategoryIds" class="font-semibold min-w-40">Product Categories</label>
                    <PrimeMultiSelect
                        v-model="productCategories"
                        aria-describedby="productCategories-help"
                        display="chip"
                        :class="{ 'p-invalid': errors.productCategoryIds }"
                        :options="productCategoryOptions"
                        optionLabel="name"
                        placeholder="Select Product Categories"
                        :maxSelectedLabels="6"
                        class="w-full"
                    />
                    <small id="productCategoryIds-help" class="block text-red-600">
                        {{ errors.productCategoryIds }}
                    </small>
                </div>
                <div class="flex justify-end gap-2">
                    <PrimeButton type="button" label="Cancel" severity="secondary" @click="() => emit('onCancel')" />
                    <PrimeButton type="submit" label="Update" />
                </div>
            </div>
        </form>
    </PrimeDialog>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useToastService } from '@/views/_shared/utils/toastHelper';
    import { useUpdateBookCommand } from '@/commands/products/updateBookCommand';
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { useGetProductByIdCommand } from '@/commands/products/getProductByIdCommand';
    import { ProductCategoryDto, BookDto } from '@/api/devbookClient';
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';

    const toastService = useToastService();
    const productCategoryOptions = ref<Array<ProductCategoryDto>>();
    const selectedBook = ref<BookDto>();

    const props = defineProps<{
      id: string;
    }>();
    
    const emit = defineEmits<{
        (e: 'onUpdate'): void;
        (e: 'onCancel'): void;
        (e: 'visibilityChanged', value: boolean): void;
    }>();

    const getProductCategoriesCommand = useGetProductCategoriesCommand((errorMessage) =>
        toastService.showError(`Error while fetching categories: ${errorMessage}`),
    );

    const getProductByIdCommand = useGetProductByIdCommand((errorMessage) =>
        toastService.showError(`Error while fetching product: ${errorMessage}`),
    );
    
    const updateBookCommand = useUpdateBookCommand(
        (errorMessage) => toastService.showError(`Error while creating book: ${errorMessage}`),
        () => emit('onUpdate'),
    );

    const createBookFormSchema = yup.object({
        name: yup.string().required().label('Name'),
        retailPrice: yup.number().required().label('Retail Price'),
        price: yup.number().required().label('Price'),
        discountAmount: yup.number().required().label('Discount'),
        description: yup.string().label('Description'),
        coverImageUrl: yup.string().label('Cover Image Url'),
        productCategories: yup.array().label('Product Categories'),
        author: yup.string().label('Author'),
    });

    const { defineField, handleSubmit, errors } = useForm({
        validationSchema: createBookFormSchema,
    });

    const [name] = defineField('name');
    const [retailPrice] = defineField('retailPrice');
    const [price] = defineField('price');
    const [discountAmount] = defineField('discountAmount');
    const [description] = defineField('description');
    const [coverImageUrl] = defineField('coverImageUrl');
    const [productCategories] = defineField('productCategories');
    const [author] = defineField('author');

    initialize();

    const onSubmit = handleSubmit(async (values) => {
      await updateBookCommand(
        props.id,
        {
          name: values.name,
          retailPrice: values.retailPrice,
          price: values.price,
          discountAmmount: values.discountAmount,
          description: values.description,
          coverImageUrl: values.coverImageUrl,
          productCategoryIds: (values.productCategories as ProductCategoryDto[])?.map(x => x.id),
          author: values.author,
      });
    });

    async function initialize() {
      if (props.id) {
        selectedBook.value = await getProductByIdCommand(props.id);
        productCategoryOptions.value = await getProductCategoriesCommand();
        name.value = selectedBook.value?.name;
        retailPrice.value = selectedBook.value?.retailPrice;
        price.value = selectedBook.value?.price;
        discountAmount.value = selectedBook.value?.discountAmmount;
        description.value = selectedBook.value?.description;
        coverImageUrl.value = selectedBook.value?.coverImageUrl;
        productCategories.value = getProductCategories(selectedBook.value?.productCategoryIds ?? []);
        author.value = selectedBook.value?.author;
      }
    }

    function getProductCategories(productCategoryIds: string[]) {
      return productCategoryOptions.value?.filter(x => productCategoryIds.includes(x.id));
    }
</script>
