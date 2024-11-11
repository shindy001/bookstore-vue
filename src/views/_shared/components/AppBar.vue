<template>
    <div class="w-full bg-black text-white">
        <div class="mx-auto w-full max-w-screen-xl flex justify-between p-2 px-4 items-center">
            <RouterLink to="/" class="flex items-center space-x-3">
                <LibraryBig :size="32" class="inline mr-1" />
                <span class="text-2xl font-semibold">Book Store</span>
            </RouterLink>

            <div class="md:w-[250px] xl:w-[300px] text-black">
                <div class="relative w-full items-center">
                    <input
                        ref="searchInputRef"
                        id="search"
                        type="search"
                        placeholder="Search..."
                        v-model="searchTerm"
                        @focusin="
                            () =>
                                foundProducts.length > 0
                                    ? (shouldShowFoundProducts = true)
                                    : (shouldShowFoundProducts = false)
                        "
                        @keyup="
                            () => {
                                searchingInProgress = true;
                                shouldShowFoundProducts = true;
                            }
                        "
                        class="h-9 p-2 pl-10 rounded-full focus:outline-none"
                    />
                    <span class="absolute start-0 inset-y-0 flex items-center px-2">
                        <Search class="size-6 text-muted-foreground" />
                    </span>

                    <div v-if="searchingInProgress">
                        <span class="z-50 absolute right-24 inset-y-0 flex items-center px-2">
                            <PrimeProgressSpinner class="w-4 h-4" />
                        </span>
                    </div>

                    <div
                        ref="searchResultsBoxRef"
                        class="z-20 absolute -left-[185px] top-10 py-4 w-[600px] lg:w-[800px] lg:-left-[285px]"
                        :class="shouldShowFoundProducts ? '' : 'hidden'"
                    >
                        <div class="rounded-lg bg-black text-white p-4 shadow content-center flex flex-col gap-4">
                            <div v-if="foundProducts.length > 0">
                                <div v-for="product in foundProducts.slice(0, 5)">
                                    <button
                                        class="flex gap-4 p-2 items-center w-full hover:bg-ochr-500/20 rounded-lg"
                                        @click="() => goToProductDetail(product.id)"
                                    >
                                        <img
                                            class="h-9 w-6 md:h-12 md:w-8 2xl:h-16 2xl:w-12"
                                            :src="product.coverImageUrl ?? productPlaceholder"
                                            alt="search thumbnail"
                                        />
                                        <p
                                            class="hover:link text-base md:text-md 2xl:text-lg hover:text-white content-center truncate"
                                        >
                                            {{ product.name }}
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div v-else>
                                <p v-if="searchingInProgress">Searching...</p>
                                <p v-else>No matches found.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="userStore.email" class="flex gap-4 items-center">
                <span>{{ userStore.email }}</span>
                <RouterLink
                    v-if="userStore.isAdmin"
                    to="/administration"
                    class="rounded p-2 hover:bg-white hover:text-black"
                    >Administration</RouterLink
                >
                <button class="rounded p-2 hover:bg-white hover:text-black" @click="() => signOut()">Sign out</button>
            </div>
            <RouterLink v-else to="/signin" class="rounded p-2 hover:bg-white hover:text-black">Sign in</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import productPlaceholder from '@/assets/book_placeholder.png';
    import { LibraryBig, Search } from 'lucide-vue-next';
    import { RouterLink, useRouter } from 'vue-router';
    import { useGetUserInfoCommand } from '@/commands/account/getUserInfoCommand';
    import { useSignOutCommand } from '@/commands/account/signOutCommand';
    import { useUserInfoStore } from '@/stores/userInfoStore';
    import { AppRoutes } from '@/plugins/router';
    import { ref, watch } from 'vue';
    import { useSearchProductsCommand } from '@/commands/products/searchProductsCommand';
    import { ProductDto } from '@/api/devbookClient';
    import { refDebounced } from '@vueuse/core';
    import { onClickOutside } from '@vueuse/core';

    const getUserInfoCommand = useGetUserInfoCommand();
    const signOutCommand = useSignOutCommand();
    const searchProductsCommand = useSearchProductsCommand();
    const foundProducts = ref<ProductDto[]>([]);
    const shouldShowFoundProducts = ref<boolean>();
    const searchingInProgress = ref<boolean>();
    const userStore = useUserInfoStore();
    const router = useRouter();
    const searchTerm = ref<string>('');
    const throttledSearchTermInput = refDebounced(searchTerm, 500);
    const searchResultsBoxRef = ref();
    const searchInputRef = ref();

    if (!userStore.email) {
        getUserInfo();
    }

    watch(throttledSearchTermInput, async () => {
        await searchProducts(searchTerm.value);
        searchingInProgress.value = false;
        shouldShowFoundProducts.value = true;
    });

    onClickOutside(searchResultsBoxRef, (_) => (shouldShowFoundProducts.value = false), { ignore: [searchInputRef] });

    async function getUserInfo() {
        const infoResponse = await getUserInfoCommand();
        userStore.setUser(infoResponse?.email ?? '', infoResponse?.roles ?? []);
    }

    async function signOut() {
        await signOutCommand();
        router.push(AppRoutes.signIn.path);
    }

    async function searchProducts(searchTerm: string | undefined) {
        if (!searchTerm) {
            return;
        }

        foundProducts.value = (await searchProductsCommand(searchTerm)) ?? [];
    }

    function goToProductDetail(id: string) {
        router.push({
            force: true,
            name: AppRoutes.productDetail.name,
            params: { id: id },
        });
        shouldShowFoundProducts.value = false;
    }
</script>
