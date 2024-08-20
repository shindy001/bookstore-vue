<template>
    <PrimeDialog
        modal
        header="Create Book"
        :style="{ width: '35rem' }"
        @update:visible="(visible: boolean) => emit('visibilityChanged', visible)"
    >
        <form @submit="onSubmit">
            <div class="flex flex-col gap-2">
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
                    <PrimeInputText
                        v-model="description"
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
                        for="discountAmmount"
                        class="font-semibold after:content-['*'] after:ml-0.5 after:text-red-600"
                        >Discount Ammount</label
                    >
                    <PrimeInputNumber
                        v-model="discountAmmount"
                        aria-describedby="discountAmmount-help"
                        class="w-full"
                        :class="{ 'p-invalid': errors.discountAmmount }"
                        mode="currency"
                        currency="USD"
                        :step="0.25"
                        fluid
                        showButtons
                        :min="0"
                    />
                    <small id="discountAmmount-help" class="block text-red-600">
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
                        :maxSelectedLabels="3"
                        class="w-full"
                    />
                    <small id="productCategoryIds-help" class="block text-red-600">
                        {{ errors.productCategoryIds }}
                    </small>
                </div>
                <div class="flex justify-end gap-2">
                    <PrimeButton
                        type="button"
                        label="Cancel"
                        severity="secondary"
                        @click="() => emit('onCancel')"
                    ></PrimeButton>
                    <PrimeButton type="submit" label="Create"></PrimeButton>
                </div>
            </div>
        </form>
    </PrimeDialog>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { ProductCategoryDto } from '@/api/devbookClient';
    import { useToastService } from '@/views/_shared/utils/toastHelper';
    import { useCreateBookCommand } from '@/commands/products/createBookCommand';
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';

    const productCategoryOptions = ref<Array<ProductCategoryDto>>();
    const toastService = useToastService();

    const emit = defineEmits<{
        (e: 'onCreate'): void;
        (e: 'onCancel'): void;
        (e: 'visibilityChanged', value: boolean): void;
    }>();

    const getProductCategoriesCommand = useGetProductCategoriesCommand((errorMessage) =>
        toastService.showError(`Error while fetching categories: ${errorMessage}`),
    );
    const createBookCommand = useCreateBookCommand(
        (errorMessage) => toastService.showError(`Error while creating book: ${errorMessage}`),
        () => emit('onCreate'),
    );

    const createBookFormSchema = yup.object({
        name: yup.string().required().label('Name'),
        retailPrice: yup.number().required().label('Retail Price'),
        price: yup.number().required().label('Price'),
        discountAmmount: yup.number().required().label('Discount'),
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
    const [discountAmmount] = defineField('discountAmmount');
    const [description] = defineField('description');
    const [coverImageUrl] = defineField('coverImageUrl');
    const [productCategories] = defineField('productCategories');
    const [author] = defineField('author');

    initialize();

    const onSubmit = handleSubmit(async (values) => {
        await createBookCommand({
            name: values.name,
            retailPrice: values.retailPrice,
            price: values.price,
            discountAmmount: values.discountAmmount,
            description: values.description,
            coverImageUrl: values.coverImageUrl,
            productCategoryIds: values.productCategoryIds,
            author: values.author,
        });
    });

    async function initialize() {
        retailPrice.value = 0;
        price.value = 0;
        discountAmmount.value = 0;
        productCategoryOptions.value = await getProductCategoriesCommand();
    }
</script>
