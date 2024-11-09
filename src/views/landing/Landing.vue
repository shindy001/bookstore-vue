<template>
    <div class="mt-6 mb-12 h-[220px] md:h-[420px]">
        <NewsCarousel>
            <template v-slot:swiper-slides>
                <swiper-slide>
                    <img :src="posters.bestSellersDiscount20" />
                </swiper-slide>
                <swiper-slide>
                    <img :src="posters.summerReadingTips" />
                </swiper-slide>
                <swiper-slide>
                    <img :src="posters.ebookDiscount50" />
                </swiper-slide>
                <swiper-slide>
                    <img :src="posters.freeShippingSunday" />
                </swiper-slide>
                <swiper-slide>
                    <img :src="posters.bookRankingsOfTheWeek" />
                </swiper-slide>
                <swiper-slide>
                    <img :src="posters.giftToAnyOrderAbove30" />
                </swiper-slide>
                <swiper-slide>
                    <img :src="posters.freeBookmarkToEveryOrder" />
                </swiper-slide>
            </template>
        </NewsCarousel>
    </div>

    <div class="flex flex-col gap-8 mx-auto max-w-screen-xl px-2">
        <div class="card p-4 bg-ochr-100 rounded-lg">
            <a :href="'/categories/' + newReleasesCategory?.id + '/products'">
                <h2 class="text-3xl font-bold p-4 hover:underline hover:underline-offset-2">New Releases</h2>
            </a>
            <BookCarousel>
                <template v-for="product in newReleases">
                    <swiper-slide>
                        <ProductCard :product="product" :go-to-product-detail-fn="goToProductDetail" />
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <a :href="'/categories/' + commingSoonCategory?.id + '/products'">
                <h2 class="text-3xl font-bold p-4 hover:underline hover:underline-offset-2">Comming Soon</h2>
            </a>
            <BookCarousel>
                <template v-for="product in commingSoon">
                    <swiper-slide>
                        <ProductCard :product="product" :go-to-product-detail-fn="goToProductDetail" />
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <a :href="'/categories/' + bestSellersCategory?.id + '/products'">
                <h2 class="text-3xl font-bold p-4 hover:underline hover:underline-offset-2">Bestsellers</h2>
            </a>
            <BookCarousel>
                <template v-for="product in bestSellers">
                    <swiper-slide>
                        <ProductCard :product="product" :go-to-product-detail-fn="goToProductDetail" />
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <a :href="'/categories/' + justForTheSummerCategory?.id + '/products'">
                <h2 class="text-3xl font-bold p-4 hover:underline hover:underline-offset-2">Just For the Summer</h2>
            </a>
            <BookCarousel>
                <template v-for="product in justForTheSummer">
                    <swiper-slide>
                        <ProductCard :product="product" :go-to-product-detail-fn="goToProductDetail" />
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>
    </div>

    <div class="p-4 mt-8 w-full flex content-center justify-center bg-ochr-100 gap-4">
        <div class="flex flex-col gap-2 p-4 items-center">
            <Warehouse :size="32" />
            <p class="text-xl font-bold">Free pickup</p>
            <p>Shipping from $2.99</p>
        </div>
        <div class="flex flex-col gap-2 p-4 items-center">
            <Library :size="32" />
            <p class="text-xl font-bold">Wide variety</p>
            <p>More than 150k titles</p>
        </div>
        <div class="flex flex-col gap-2 p-4 items-center">
            <Truck :size="32" />
            <p class="text-xl font-bold">Shop on every corner</p>
            <p>We have more than 37 shops</p>
        </div>
        <div class="flex flex-col gap-2 p-4 items-center">
            <MessageSquareHeart :size="32" />
            <p class="text-xl font-bold">We love books</p>
            <p>Check out our recommandations</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Warehouse, Library, Truck, MessageSquareHeart } from 'lucide-vue-next';
    import NewsCarousel from '@/views/landing/_components/NewsCarousel.vue';
    import BookCarousel from '@/views/landing/_components/BookCarousel.vue';
    import * as posters from '@/assets/posters/index';
    import { useGetProductsCommand } from '@/commands/products/getProductsCommand';
    import { ProductCategoryDto, ProductDto } from '@/api/devbookClient';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { AppRoutes } from '@/plugins/router';
    import ProductCard from '@/views/_shared/components/ProductCard.vue';

    //TODO - save cover images to local DB or server, so it can be fastly load on page load
    const error = ref('');
    const bookCategory = ref<ProductCategoryDto>();
    const newReleasesCategory = ref<ProductCategoryDto>();
    const newReleases = ref<ProductDto[]>([]);
    const commingSoonCategory = ref<ProductCategoryDto>();
    const commingSoon = ref<ProductDto[]>([]);
    const bestSellersCategory = ref<ProductCategoryDto>();
    const bestSellers = ref<ProductDto[]>([]);
    const justForTheSummerCategory = ref<ProductCategoryDto>();
    const justForTheSummer = ref<ProductDto[]>([]);

    const router = useRouter();
    const getProductsCommand = useGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const getProductCategories = useGetProductCategoriesCommand((errorMessage) => (error.value = errorMessage));

    initialize();

    async function initialize() {
        const productCategories = await getProductCategories();
        bookCategory.value = productCategories?.find((x) => x.name === 'Books' && x.isTopLevelCategory === true);
        newReleasesCategory.value = productCategories?.find((x) => x.name === 'New Releases');
        commingSoonCategory.value = productCategories?.find((x) => x.name === 'Comming Soon');
        bestSellersCategory.value = productCategories?.find((x) => x.name === 'Bestsellers');
        justForTheSummerCategory.value = productCategories?.find((x) => x.name === 'Just For The Summer');

        if (newReleasesCategory) {
            newReleases.value = (await getProductsCommand(12, 0, 'Book', newReleasesCategory?.value?.id)) ?? [];
        }

        if (commingSoonCategory) {
            commingSoon.value = (await getProductsCommand(12, 0, 'Book', commingSoonCategory?.value?.id)) ?? [];
        }

        if (bestSellersCategory) {
            bestSellers.value = (await getProductsCommand(12, 0, 'Book', bestSellersCategory?.value?.id)) ?? [];
        }

        if (justForTheSummerCategory) {
            justForTheSummer.value =
                (await getProductsCommand(12, 0, 'Book', justForTheSummerCategory?.value?.id)) ?? [];
        }
    }

    function goToProductDetail(id: string) {
        router.push({
            name: AppRoutes.productDetail.name,
            params: { id: id },
            query: { categoryId: bookCategory.value?.id, categoryName: bookCategory.value?.name },
        });
    }
</script>
