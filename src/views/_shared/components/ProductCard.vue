<template>
    <div
        class="p-2 w-full flex flex-col items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
        :onclick="() => goToProductDetailFn?.(product.id)"
    >
        <div class="h-[250px] pt-2 content-center">
            <img
                width="135px"
                :src="product.coverImageUrl ? product?.coverImageUrl : productPlaceholder"
                :alt="product?.name"
            />
        </div>
        <div class="text-center">
            <p class="font-semibold hover:underline hover:underline-offset-2">
                {{ product?.name }}
            </p>
            <p v-if="(product as BookDto).author" class="text-base">
                {{ (product as BookDto).author }}
            </p>
            <p>
                <span class="line-through pr-2">${{ product?.retailPrice }}</span>
                <span class="font-semibold">${{ product?.price }}</span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import productPlaceholder from '@/assets/book_placeholder.png';
    import { ProductDto, BookDto } from '@/api/devbookClient';

    defineProps<{
        product: ProductDto;
        goToProductDetailFn?: (id: string) => void;
    }>();
</script>
