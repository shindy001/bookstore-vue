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
                    &gt; <span class="mx-1">{{ product?.name }}</span>
                </div>
            </div>
        </div>
        <div class="flex mx-auto max-w-screen-lg px-2 gap-24">
            <div class="w-3/5 flex flex-col gap-4">
                <p class="text-4xl font-bold">{{ product?.name }}</p>
                <p v-if="product && (product as BookDto).author">
                    Author: <span class="text-ochr-500">{{ (product as BookDto)?.author }}</span>
                </p>
                <p class="">{{ product?.description }}</p>
            </div>
            <div class="w-2/5"><img :src="product?.coverImageUrl ?? bookPlaceholder" /></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { House } from 'lucide-vue-next';
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
