<template>
    <div class="h-[260px] md:h-[360px] mx-auto">
        <swiper-container
            :id="componentId"
            init="false"
            slides-per-view="auto"
            space-between="30"
            navigation="true"
            slides-per-group="4"
            :breakpoints="{
                320: {
                    spaceBetween: 20,
                    slidesPerGroup: 3,
                },
                700: {
                    spaceBetween: 20,
                    slidesPerGroup: 4,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerGroup: 3,
                },
                950: {
                    spaceBetween: 20,
                    slidesPerGroup: 4,
                },
                1200: {
                    spaceBetween: 30,
                    slidesPerGroup: 5,
                },
                1440: {
                    spaceBetween: 30,
                    slidesPerGroup: 6,
                },
            }"
        >
            <slot name="swiper-slides" />
        </swiper-container>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { v4 as uuidv4 } from 'uuid';

    const componentId = uuidv4().toString();

    onMounted(() => {
        const swiper: any = document.getElementById(componentId);
        const params = {
            injectStyles: [':host .swiper-button-disabled { display: none; }'],
        };

        Object.assign(swiper, params);
        swiper.initialize();
    });
</script>

<style scoped>
    swiper-container {
        width: 100%;
        height: 100%;
    }

    :slotted(swiper-slide) {
        text-align: center;
        background: #fafafa;
        display: flex;
        max-width: 205px;
        justify-content: center;
        align-items: center;
    }

    swiper-container {
        &::part(button-next),
        &::part(button-prev) {
            box-sizing: border-box;
            border-radius: 50%;
            padding: 15px;
            width: 50px;
            height: 50px;
            background-color: #3c3c3c;
            color: white;
        }
    }

    @media (max-width: 768px) {
        :slotted(swiper-slide) {
            max-width: 140px;
        }
    }

    :slotted(swiper-slide div img),
    :slotted(swiper-slide img) {
        display: block;
        margin: auto;
        object-fit: cover;
    }
</style>
