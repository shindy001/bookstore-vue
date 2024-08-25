<template>
    <swiper-container
        slides-per-view="auto"
        centered-slides="true"
        space-between="20"
        autoplay-delay="3000"
        loop="true"
        navigation="true"
    >
        <slot name="swiper-slides" />
    </swiper-container>
</template>

<style scoped>
    swiper-container {
        width: 100%;
        height: 100%;
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
        swiper-slide {
            max-width: 330px;
        }
    }

    swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
