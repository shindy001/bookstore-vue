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
                <h2 class="text-xl font-bold p-4">New Releases</h2>
            </a>
            <BookCarousel>
                <template v-for="book in newReleases">
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                            :onclick="() => goToProductDetail(book.id)"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="book.coverImageUrl ? book.coverImageUrl : bookPlaceholder"
                                    :alt="book.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ book.name }}
                                </p>
                                <p class="text-base">{{ book.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ book.retailPrice }}</span>
                                    <span class="font-semibold">${{ book.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <a :href="'/categories/' + preOrdersCategory?.id + '/products'">
                <h2 class="text-xl font-bold p-4">Comming soon</h2>
            </a>
            <BookCarousel>
                <template v-for="book in preOrders">
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                            :onclick="() => goToProductDetail(book.id)"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="book.coverImageUrl ? book.coverImageUrl : bookPlaceholder"
                                    :alt="book.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ book.name }}
                                </p>
                                <p class="text-base">{{ book.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ book.retailPrice }}</span>
                                    <span class="font-semibold">${{ book.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <a :href="'/categories/' + bestSellersCategory?.id + '/products'">
                <h2 class="text-xl font-bold p-4">Bestsellers</h2>
            </a>
            <BookCarousel>
                <template v-for="book in bestSellers">
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                            :onclick="() => goToProductDetail(book.id)"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="book.coverImageUrl ? book.coverImageUrl : bookPlaceholder"
                                    :alt="book.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ book.name }}
                                </p>
                                <p class="text-base">{{ book.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ book.retailPrice }}</span>
                                    <span class="font-semibold">${{ book.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <a :href="'/categories/' + justForTheSummerCategory?.id + '/products'">
                <h2 class="text-xl font-bold p-4">Just For the Summer</h2>
            </a>
            <BookCarousel>
                <template v-for="book in justForTheSummer">
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                            :onclick="() => goToProductDetail(book.id)"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="140px"
                                    :src="book.coverImageUrl ? book.coverImageUrl : bookPlaceholder"
                                    :alt="book.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ book.name }}
                                </p>
                                <p class="text-base">{{ book.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ book.retailPrice }}</span>
                                    <span class="font-semibold">${{ book.price }}</span>
                                </p>
                            </div>
                        </div>
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
    import { BookDto, ProductCategoryDto } from '@/api/devbookClient';
    import bookPlaceholder from '@/assets/book_placeholder.png';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { AppRoutes } from '@/plugins/router';

    //TODO - save cover images to local DB or server, so it can be fastly load on page load
    //TODO2 - correct swiper and use v-for insted of direct bookChunks indexes for covers
    const error = ref('');
    const bookCategory = ref<ProductCategoryDto>();
    const newReleasesCategory = ref<ProductCategoryDto>();
    const newReleases = ref<BookDto[]>([]);
    const preOrdersCategory = ref<ProductCategoryDto>();
    const preOrders = ref<BookDto[]>([]);
    const bestSellersCategory = ref<ProductCategoryDto>();
    const bestSellers = ref<BookDto[]>([]);
    const justForTheSummerCategory = ref<ProductCategoryDto>();
    const justForTheSummer = ref<BookDto[]>([]);

    const router = useRouter();
    const getProductsCommand = useGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const getProductCategories = useGetProductCategoriesCommand((errorMessage) => (error.value = errorMessage));

    initialize();

    async function initialize() {
        const productCategories = await getProductCategories();
        console.log(productCategories);
        bookCategory.value = productCategories?.find((x) => x.name === 'Books' && x.isTopLevelCategory === true);
        newReleasesCategory.value = productCategories?.find((x) => x.name === 'New Releases');
        preOrdersCategory.value = productCategories?.find((x) => x.name === 'Pre-orders');
        bestSellersCategory.value = productCategories?.find((x) => x.name === 'Bestsellers');
        justForTheSummerCategory.value = productCategories?.find((x) => x.name === 'Just For The Summer');

        if (newReleasesCategory) {
            newReleases.value = (await getProductsCommand(12, 0, 'Book', newReleasesCategory?.value?.id)) ?? [];
        }

        if (preOrdersCategory) {
            preOrders.value = (await getProductsCommand(12, 0, 'Book', preOrdersCategory?.value?.id)) ?? [];
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
