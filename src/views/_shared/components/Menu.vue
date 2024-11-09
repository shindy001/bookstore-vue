<template>
    <div class="relative border-b-[1px] border-gray-200 h-24">
        <div class="mx-auto max-w-screen-xl h-full" @mouseleave="menuIndex = 0">
            <div class="px-4 flex content-center justify-center join h-full">
                <div v-for="(topLevelCategory, index) in topLevelProductCategories">
                    <button
                        @mouseenter="menuIndex = index + 1"
                        :class="getMenuItemClasses(index)"
                        class="p-6 h-full rounded-none"
                        :onclick="() => goToCategoryProducts(topLevelCategory.id)"
                    >
                        <div class="flex items-center content-center justify-center">
                            <Book class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                            <div class="h-full min-w-24 max-w-fit">{{ topLevelCategory.name }}</div>
                        </div>
                    </button>
                </div>

                <button
                    @mouseenter="menuIndex = 999"
                    :class="[menuIndex === 999 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 h-full rounded-none border-l-[1px] border-gray-200 join-item"
                >
                    <div class="flex items-center content-center justify-center">
                        <Tablet class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                        <div class="h-full min-w-24 max-w-fit">E-books</div>
                    </div>
                </button>
            </div>

            <div v-for="(topLevelCategory, index) in topLevelProductCategories">
                <div v-if="menuIndex === index + 1" class="absolute z-10 left-0 w-full h-[400px] bg-white">
                    <div class="mx-auto w-full h-full">
                        <div class="flex gap-16 h-full">
                            <div class="w-1/3 bg-ochr-100 h-full">
                                <div class="flex">
                                    <div class="w-2/3"></div>
                                    <div class="w-1/3 min-w-[250px]">
                                        <p class="text-xl py-6 font-bold">Could interest you</p>
                                        <div class="flex flex-col pt-4 pr-8 text-lg font-semibold">
                                            <a
                                                :href="'/categories/' + newReleasesCategory?.id + '/products'"
                                                class="p-2 hover:underline hover:underline-offset-4"
                                            >
                                                <Box class="inline h-full w-8 mr-2" :stroke-width="1" :size="32" />
                                                <span>{{ newReleasesCategory?.name }}</span>
                                            </a>
                                            <PrimeDivider />
                                            <a
                                                :href="'/categories/' + bestSellersCategory?.id + '/products'"
                                                class="p-2 hover:underline hover:underline-offset-4"
                                            >
                                                <div class="flex items-center content-center">
                                                    <Star class="inline h-full w-8 mr-2" :stroke-width="1" :size="32" />
                                                    <span>{{ bestSellersCategory?.name }}</span>
                                                </div>
                                            </a>
                                            <PrimeDivider />
                                            <a
                                                :href="'/categories/' + commingSoonCategory?.id + '/products'"
                                                class="p-2 hover:underline hover:underline-offset-4"
                                            >
                                                <div class="flex items-center content-center">
                                                    <Clock
                                                        class="inline h-full w-8 mr-2"
                                                        :stroke-width="1"
                                                        :size="32"
                                                    />
                                                    <span>{{ commingSoonCategory?.name }}</span>
                                                </div>
                                            </a>
                                            <PrimeDivider />
                                            <router-link
                                                to="/gift-vouchers"
                                                class="p-2 hover:underline hover:underline-offset-4"
                                            >
                                                <div class="flex items-center content-center">
                                                    <Gift class="inline h-full w-8 mr-2" :stroke-width="1" :size="32" />
                                                    <span>Gift Vouchers</span>
                                                </div>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p class="text-xl py-6 font-bold">Categories</p>
                                <div class="flex gap-4">
                                    <div
                                        class="pt-6 grid grid-rows-4 grid-flow-col gap-4 h-[300px] min-w-[600px] text-lg font-semibold"
                                    >
                                        <div v-if="topLevelCategory.subcategories?.length">
                                            <div v-for="subcategory in topLevelCategory.subcategories">
                                                <a
                                                    :href="
                                                        '/categories/' +
                                                        getProductCategory(subcategory)?.id +
                                                        '/products'
                                                    "
                                                    class="hover:underline hover:underline-offset-4"
                                                >
                                                    <p>{{ subcategory }}</p>
                                                    <PrimeDivider />
                                                </a>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class="flex flex-col w-full h-full items-center justify-center">
                                                <p class="text-2xl">Sorry, there are no categories yet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden xl:block p-6 w-[500px]">
                                <img :src="posters.freeBookmarkToEveryOrder" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="menuIndex == 999" class="absolute z-10 left-0 w-full h-[400px] bg-white">
                <div class="mx-auto w-full h-full max-w-screen-xl">
                    <div class="flex flex-col w-full h-full items-center justify-center">
                        <p class="text-2xl">Sorry, there are no items in this category yet.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Book, Gift, Box, Star, Clock, Tablet } from 'lucide-vue-next';
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';
    import { useToastService } from '@/views/_shared/utils/toastHelper';
    import { ProductCategoryDto } from '@/api/devbookClient';
    import * as posters from '@/assets/posters/index';
    import { useRouter } from 'vue-router';
    import { AppRoutes } from '@/plugins/router';

    const menuIndex = ref(0);
    const productCategories = ref<Array<ProductCategoryDto>>();
    const topLevelProductCategories = ref<Array<ProductCategoryDto>>();
    const newReleasesCategory = ref<ProductCategoryDto>();
    const commingSoonCategory = ref<ProductCategoryDto>();
    const bestSellersCategory = ref<ProductCategoryDto>();

    const toastService = useToastService();

    const router = useRouter();
    const getProductCategoriesCommand = useGetProductCategoriesCommand((errorMessage) =>
        toastService.showError(`Error while fetching categories: ${errorMessage}`),
    );

    initialize();

    async function initialize() {
        productCategories.value = (await getProductCategoriesCommand()) ?? [];
        topLevelProductCategories.value = productCategories.value?.filter((x) => x.isTopLevelCategory);
        newReleasesCategory.value = getProductCategory('New Releases');
        commingSoonCategory.value = getProductCategory('Comming Soon');
        bestSellersCategory.value = getProductCategory('Bestsellers');
    }

    function getProductCategory(categoryName: string) {
        return productCategories.value?.find((x) => x.name === categoryName);
    }

    function getMenuItemClasses(currentIndex: number) {
        let classes = '';
        classes += menuIndex.value === currentIndex + 1 ? ' bg-black text-white' : ' hover:bg-black hover:text-white';
        classes += currentIndex == 0 ? '' : ' border-l-[1px] border-gray-200 join-item';
        return classes;
    }

    function goToCategoryProducts(categoryId: string) {
        router.push({ name: AppRoutes.products.name, params: { id: categoryId } });
    }
</script>
