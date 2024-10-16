<template>
    <div class="flex flex-col gap-12">
        <div class="py-2 bg-ochr-100">
            <div class="flex mx-auto max-w-screen-xl px-4">
                <a href="/"><House :size="24" class="inline mr-1" /></a>
                <div>
                    &gt;<a
                        :href="'/categories/' + categoryId + '/products'"
                        class="mx-1 hover:underline hover:underline-offset-4"
                        >{{ categoryName }}</a
                    >
                </div>
                <div>
                    &gt;<span class="mx-1">{{ product?.name }}</span>
                </div>
            </div>
        </div>
        <div class="flex mx-auto max-w-[1200px] px-2 gap-24">
            <div class="w-7/12 flex flex-col gap-4">
                <p class="text-4xl font-bold">{{ product?.name }}</p>
                <p v-if="product && (product as BookDto).author">
                    Author: <span class="text-amber-700">{{ (product as BookDto)?.author }}</span>
                </p>
                <p>{{ product?.description }}</p>
                <div class="flex flex-col">
                    <div
                        class="w-48 h-20 flex flex-col pt-2 content-center text-center relative top-[1px] z-10 bg-ochr-100 border-x border-t border-gray-300 border-t-gray-300 rounded-t-md"
                    >
                        <p class="text-md font-bold"><BookMarked :size="18" class="inline mr-1 text-amber-700" /></p>
                        <p class="text-md font-bold">{{ product?.productType }}</p>
                    </div>
                    <div class="p-8 w-full h-80 bg-ochr-100 border border-gray-300 rounded-b-md text-xl">
                        <p class="font-semibold flex content-center align-middle">
                            <p>Price in eshop</p>
                            <p class="font-bold px-3 text-2xl">${{ product?.price }}</p>
                            <div class="flex justify-center">
                                <p class="line-through text-base font-thin text-amber-800 leading-7"
                                >${{ product?.retailPrice }}</p>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-5/12">
                <img :src="product?.coverImageUrl ?? bookPlaceholder" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { House, BookMarked } from 'lucide-vue-next';
    import { ref } from 'vue';
    import { useGetProductByIdCommand } from '@/commands/products/getProductByIdCommand';
    import { BookDto, ProductDto } from '@/api/devbookClient';
    import bookPlaceholder from '@/assets/book_placeholder.png';

    const route = useRoute();
    const error = ref('');
    const productId = route.params.id as string;
    const categoryId = route.query.categoryId as string;
    const categoryName = route.query.categoryName as string;
    const product = ref<ProductDto>();

    const getProductByIdCommand = useGetProductByIdCommand((errorMessage) => (error.value = errorMessage));

    initialize();

    async function initialize() {
        product.value = await getProductByIdCommand(productId);
    }
</script>
