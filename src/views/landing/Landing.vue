<template>
    <div class="mt-6 mb-12 h-[220px] md:h-[420px]">
        <NewsCarousel>
            <template v-slot:swiper-slides>
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
            </template>
        </NewsCarousel>
    </div>

    <div class="flex flex-col gap-8 mx-auto max-w-screen-xl px-2">
        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">New Releases</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                    <swiper-slide>Slide 10</swiper-slide>
                    <swiper-slide>Slide 11</swiper-slide>
                    <swiper-slide>Slide 12</swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Comming soon</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                    <swiper-slide>Slide 10</swiper-slide>
                    <swiper-slide>Slide 11</swiper-slide>
                    <swiper-slide>Slide 12</swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Bestsellers</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                    <swiper-slide>Slide 10</swiper-slide>
                    <swiper-slide>Slide 11</swiper-slide>
                    <swiper-slide>Slide 12</swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Just For the Summer</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                    <swiper-slide>Slide 10</swiper-slide>
                    <swiper-slide>Slide 11</swiper-slide>
                    <swiper-slide>Slide 12</swiper-slide>
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
</script>
