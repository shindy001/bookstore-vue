<template>
    <div class="flex flex-col gap-8">
        <div class="card">
            <PrimeCarousel
                :show-indicators="false"
                :value="products"
                :numVisible="1"
                :numScroll="1"
                circular
                :autoplayInterval="4000"
            >
                <template #item="slotProps">
                    <div class="p-4 flex justify-center">
                        <img
                            :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                            :alt="slotProps.data.name"
                            class="w-[620px] rounded"
                        />
                    </div>
                </template>
            </PrimeCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">New Releases</h2>
            <PrimeCarousel
                :show-indicators="false"
                :value="products"
                circular
                :numVisible="6"
                :numScroll="6"
                :responsiveOptions="bookCarouselResponsiveOptions"
            >
                <template #item="slotProps">
                    <div class="p-2 flex justify-center">
                        <div class="w-[200px] h-[350px] flex flex-col items-center bg-green-300 p-4 gap-2">
                            <div class="w-[160px] h-[220px] bg-red-200">Book image</div>
                            <div class="w-full flex flex-col items-center">
                                <p class="text-lg">{{ slotProps.data.name }} Book name</p>
                                <p class="text-sm underline">Book author link</p>
                                <p><span class="line-through mr-2">$21.99</span><span class="text-xl">$14.99</span></p>
                            </div>
                        </div>
                    </div>
                </template>
            </PrimeCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Comming soon</h2>
            <PrimeCarousel
                :show-indicators="false"
                :value="products"
                circular
                :numVisible="6"
                :numScroll="6"
                :responsiveOptions="bookCarouselResponsiveOptions"
            >
                <template #item="slotProps">
                    <div class="p-2 flex justify-center">
                        <div class="w-[200px] h-[350px] flex flex-col items-center bg-green-300 p-4 gap-2">
                            <div class="w-[160px] h-[220px] bg-red-200">Book image</div>
                            <div class="w-full flex flex-col items-center">
                                <p class="text-lg">{{ slotProps.data.name }} Book name</p>
                                <p class="text-sm underline">Book author link</p>
                                <p><span class="line-through mr-2">$21.99</span><span class="text-xl">$14.99</span></p>
                            </div>
                        </div>
                    </div>
                </template>
            </PrimeCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Bestsellers</h2>
            <PrimeCarousel
                :show-indicators="false"
                :value="products"
                circular
                :numVisible="6"
                :numScroll="6"
                :responsiveOptions="bookCarouselResponsiveOptions"
            >
                <template #item="slotProps">
                    <div class="p-2 flex justify-center">
                        <div class="w-[200px] h-[350px] flex flex-col items-center bg-green-300 p-4 gap-2">
                            <div class="w-[160px] h-[220px] bg-red-200">Book image</div>
                            <div class="w-full flex flex-col items-center">
                                <p class="text-lg">{{ slotProps.data.name }} Book name</p>
                                <p class="text-sm underline">Book author link</p>
                                <p><span class="line-through mr-2">$21.99</span><span class="text-xl">$14.99</span></p>
                            </div>
                        </div>
                    </div>
                </template>
            </PrimeCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Just For the Summer</h2>
            <PrimeCarousel
                :show-indicators="false"
                :value="products"
                circular
                :numVisible="6"
                :numScroll="6"
                :responsiveOptions="bookCarouselResponsiveOptions"
            >
                <template #item="slotProps">
                    <div class="p-2 flex justify-center">
                        <div class="w-[200px] h-[350px] flex flex-col items-center bg-green-300 p-4 gap-2">
                            <div class="w-[160px] h-[220px] bg-red-200">Book image</div>
                            <div class="w-full flex flex-col items-center">
                                <p class="text-lg">{{ slotProps.data.name }} Book name</p>
                                <p class="text-sm underline">Book author link</p>
                                <p><span class="line-through mr-2">$21.99</span><span class="text-xl">$14.99</span></p>
                            </div>
                        </div>
                    </div>
                </template>
            </PrimeCarousel>
        </div>

        <div class="p-4 w-full flex content-center justify-center bg-ochr-100 gap-4">
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
    </div>
</template>

<script setup lang="ts">
    import { Warehouse, Library, Truck, MessageSquareHeart } from 'lucide-vue-next';
    const bookCarouselResponsiveOptions = [
        {
            breakpoint: '1700px',
            numVisible: 6,
            numScroll: 6,
        },
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 4,
        },
        {
            breakpoint: '1000px',
            numVisible: 3,
            numScroll: 3,
        },
    ];
    const products = [
        {
            id: '1000',
            image: 'bamboo-watch.jpg',
        },
        {
            id: '1001',
            image: 'bamboo-watch.jpg',
        },
        {
            id: '1002',
            image: 'bamboo-watch.jpg',
        },
        {
            id: '1003',
            image: 'bamboo-watch.jpg',
        },
        {
            id: '1004',
            image: 'bamboo-watch.jpg',
        },
        {
            id: '1005',
            image: 'bamboo-watch.jpg',
        },
    ];
</script>
