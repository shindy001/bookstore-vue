<template>
    <div class="flex flex-col gap-12">
        <div class="py-2 bg-ochr-100">
            <div class="flex mx-auto max-w-screen-xl px-4">
                <a href="/"><House :size="24" class="inline mr-1" /></a>

                <div>
                    &gt;<span class="mx-1">{{ productCategory?.name }}</span>
                </div>
            </div>
        </div>
        <div>
            <div class="mx-auto max-w-screen-xl px-4">
                <div class="card p-4 bg-ochr-100 rounded-lg">
                    <p class="text-4xl font-bold p-4">{{ productCategory?.name }}</p>

                    <div class="grid grid-cols-5 gap-4">
                        <div v-for="product in products">
                            <ProductCard :product="product" :go-to-product-detail-fn="goToProductDetail" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { House } from 'lucide-vue-next';
    import ProductCard from '@/views/_shared/components/ProductCard.vue';
    import { ProductCategoryDto, ProductDto } from '@/api/devbookClient';
    import { useGetProductCategoryByIdCommand } from '@/commands/products/getProductCategoryByIdCommand';
    import { useGetProductsCommand } from '@/commands/products/getProductsCommand';
    import router, { AppRoutes } from '@/plugins/router';

    const route = useRoute();
    const getProductCategoryByIdCommand = useGetProductCategoryByIdCommand();
    const getProductsCommand = useGetProductsCommand();
    const productCategoryId = route.params.id as string;
    const productCategory = ref<ProductCategoryDto>();
    const products = ref<ProductDto[]>([]);

    initialize();

    async function initialize() {
        productCategory.value = await getProductCategoryByIdCommand(productCategoryId);
        products.value = (await getProductsCommand(100, 0, undefined, productCategoryId)) ?? [];
    }

    function goToProductDetail(id: string) {
        router.push({
            name: AppRoutes.productDetail.name,
            params: { id: id },
            query: { categoryId: productCategory.value?.id, categoryName: productCategory.value?.name },
        });
    }
</script>
