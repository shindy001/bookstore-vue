<template>
    <div>
        <div class="card">
            <PrimeCarousel
                :show-indicators="false"
                :value="products"
                :numVisible="1"
                :numScroll="1"
                :responsiveOptions="[
                    {
                        breakpoint: '1400px',
                        numVisible: 1,
                        numScroll: 1,
                    },
                ]"
                circular
                :autoplayInterval="4000"
            >
                <template #item="slotProps">
                    <div class="p-4 flex justify-center">
                        <img
                            :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                            :alt="slotProps.data.name"
                            class="w-[800px] rounded"
                        />
                    </div>
                </template>
            </PrimeCarousel>
        </div>
    </div>
</template>

<script setup lang="ts">
    const products = [
        {
            id: '1000',
            image: 'bamboo-watch.jpg',
        },
    ];
</script>
