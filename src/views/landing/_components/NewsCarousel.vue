<template>
    <swiper-container slides-per-view="auto" space-between="20" autoplay-delay="5000" loop="true">
        <slot name="swiper-slides" />
    </swiper-container>
</template>

<style scoped>
    swiper-container {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    :slotted(swiper-slide) {
        text-align: center;
        font-size: 18px;
        background: lightpink;
        display: flex;
        max-width: 630px;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        :slotted(swiper-slide) {
            max-width: 330px;
        }
    }

    :slotted(swiper-slide) img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
