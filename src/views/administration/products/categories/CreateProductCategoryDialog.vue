<template>
    <PrimeDialog
        modal
        header="Create Product Category"
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
                    <label for="isTopLevelCategory" class="font-semibold">Is top level category</label>
                    <div>
                        <PrimeCheckbox
                            v-model="isTopLevelCategory"
                            aria-describedby="isTopLevelCategory-help"
                            class="w-full"
                            :class="{ 'p-invalid': errors.isTopLevelCategory }"
                            :binary="true"
                        />
                        <small id="isTopLevelCategory-help" class="block text-red-600">
                            {{ errors.isTopLevelCategory }}
                        </small>
                    </div>
                </div>
                <div>
                    <label for="productCategoryIds" class="font-semibold min-w-40">Product Categories</label>
                    <PrimeMultiSelect
                        v-model="productCategories"
                        aria-describedby="productCategories-help"
                        display="chip"
                        :class="{ 'p-invalid': errors.productCategoryIds }"
                        :options="subcategoriesOptions"
                        optionLabel="name"
                        placeholder="Select Product Categories"
                        :maxSelectedLabels="6"
                        class="w-full"
                    />
                    <small id="productCategories-help" class="block text-red-600">
                        {{ errors.productCategories }}
                    </small>
                </div>
                <div class="flex justify-end gap-2">
                    <PrimeButton type="button" label="Cancel" severity="secondary" @click="emit('onCancel')" />
                    <PrimeButton type="submit" label="Create" />
                </div>
            </div>
        </form>
    </PrimeDialog>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useCreateProductCategoryCommand } from '@/commands/products/createProductCategoryCommand';
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { ProductCategoryDto } from '@/api/devbookClient';
    import { useToastService } from '@/views/_shared/utils/toastHelper';
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';

    const subcategories = ref<Array<ProductCategoryDto>>();
    const subcategoriesOptions = ref<Array<ProductCategoryDto>>();
    const toastService = useToastService();

    const emit = defineEmits<{
        (e: 'onCreate'): void;
        (e: 'onCancel'): void;
        (e: 'visibilityChanged', value: boolean): void;
    }>();

    const getProductCategoriesCommand = useGetProductCategoriesCommand((errorMessage) =>
        toastService.showError(`Error while fetching categories: ${errorMessage}`),
    );
    const createProductCategoryCommand = useCreateProductCategoryCommand(
        (errorMessage) => toastService.showError(`Error while creating category: ${errorMessage}`),
        () => emit('onCreate'),
    );

    const createProductCategoryFormSchema = yup.object({
        name: yup.string().required().label('Name'),
        isTopLevelCategory: yup.boolean().label('Is Top Level Category'),
        productCategories: yup.array().label('Product Categories'),
    });

    const { defineField, handleSubmit, errors } = useForm({
        validationSchema: createProductCategoryFormSchema,
    });

    const [name] = defineField('name');
    const [isTopLevelCategory] = defineField('isTopLevelCategory');
    const [productCategories] = defineField('productCategories');

    initialize();

    const onSubmit = handleSubmit(async (values) => {
        await createProductCategoryCommand({
            name: values.name,
            isTopLevelCategory: isTopLevelCategory.value,
            subcategories: subcategories?.value?.map((x) => x.id),
        });
    });

    async function initialize() {
        const productCategories = await getProductCategoriesCommand();
        subcategoriesOptions.value = productCategories?.filter((x) => !x.isTopLevelCategory) ?? [];
    }
</script>
