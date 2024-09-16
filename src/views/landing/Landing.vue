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
            <h2 class="text-xl font-bold p-4">New Releases</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[0]?.coverImageUrl
                                            ? bookChunks[0]?.[0]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[0]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[0]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[1]?.coverImageUrl
                                            ? bookChunks[0]?.[1]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[1]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[1]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[2]?.coverImageUrl
                                            ? bookChunks[0]?.[2]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[2]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[2]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[3]?.coverImageUrl
                                            ? bookChunks[0]?.[3]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[3]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[3]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="140px"
                                    :src="
                                        bookChunks[0]?.[4]?.coverImageUrl
                                            ? bookChunks[0]?.[4]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[4]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[4]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="140px"
                                    :src="
                                        bookChunks[0]?.[5]?.coverImageUrl
                                            ? bookChunks[0]?.[5]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[5]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[5]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[6]?.coverImageUrl
                                            ? bookChunks[0]?.[6]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[6]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[6]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[7]?.coverImageUrl
                                            ? bookChunks[0]?.[7]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[7]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[7]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[8]?.coverImageUrl
                                            ? bookChunks[0]?.[8]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[8]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[8]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[9]?.coverImageUrl
                                            ? bookChunks[0]?.[9]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[9]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[9]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[10]?.coverImageUrl
                                            ? bookChunks[0]?.[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[10]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[10]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[0]?.[11]?.coverImageUrl
                                            ? bookChunks[0]?.[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[0]?.[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[0]?.[11]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[0]?.[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[0]?.[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[0]?.[11]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Comming soon</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[0]?.coverImageUrl
                                            ? bookChunks[1]?.[0]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[0]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[0]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[1]?.coverImageUrl
                                            ? bookChunks[1]?.[1]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[1]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[1]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="140px"
                                    :src="
                                        bookChunks[1]?.[2]?.coverImageUrl
                                            ? bookChunks[1]?.[2]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[2]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[2]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[3]?.coverImageUrl
                                            ? bookChunks[1]?.[3]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[3]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[3]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[4]?.coverImageUrl
                                            ? bookChunks[1]?.[4]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[4]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[4]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[5]?.coverImageUrl
                                            ? bookChunks[1]?.[5]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[5]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[5]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[6]?.coverImageUrl
                                            ? bookChunks[1]?.[6]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[6]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[6]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[7]?.coverImageUrl
                                            ? bookChunks[1]?.[7]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[7]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[7]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[8]?.coverImageUrl
                                            ? bookChunks[1]?.[8]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[8]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[8]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="140px"
                                    :src="
                                        bookChunks[1]?.[9]?.coverImageUrl
                                            ? bookChunks[1]?.[9]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[9]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[9]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[1]?.[10]?.coverImageUrl
                                            ? bookChunks[1]?.[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[10]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[10]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="140px"
                                    :src="
                                        bookChunks[1]?.[11]?.coverImageUrl
                                            ? bookChunks[1]?.[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[1]?.[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[1]?.[11]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[1]?.[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[1]?.[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[1]?.[11]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Bestsellers</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[0]?.coverImageUrl
                                            ? bookChunks[2]?.[0]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[0]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[0]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[1]?.coverImageUrl
                                            ? bookChunks[2]?.[1]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[1]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[1]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[2]?.coverImageUrl
                                            ? bookChunks[2]?.[2]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[2]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[2]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[3]?.coverImageUrl
                                            ? bookChunks[2]?.[3]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[3]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[3]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[4]?.coverImageUrl
                                            ? bookChunks[2]?.[4]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[4]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[4]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[5]?.coverImageUrl
                                            ? bookChunks[2]?.[5]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[5]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[5]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[6]?.coverImageUrl
                                            ? bookChunks[2]?.[6]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[6]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[6]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[7]?.coverImageUrl
                                            ? bookChunks[2]?.[7]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[7]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[7]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[8]?.coverImageUrl
                                            ? bookChunks[2]?.[8]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[8]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[8]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[9]?.coverImageUrl
                                            ? bookChunks[2]?.[9]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[9]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[9]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[10]?.coverImageUrl
                                            ? bookChunks[2]?.[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[10]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[10]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[2]?.[11]?.coverImageUrl
                                            ? bookChunks[2]?.[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[2]?.[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[2]?.[11]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[2]?.[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[2]?.[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[2]?.[11]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </template>
            </BookCarousel>
        </div>

        <div class="card p-4 bg-ochr-100 rounded-lg">
            <h2 class="text-xl font-bold p-4">Just For the Summer</h2>
            <BookCarousel>
                <template v-slot:swiper-slides>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="140px"
                                    :src="
                                        bookChunks[3]?.[0]?.coverImageUrl
                                            ? bookChunks[3]?.[0]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[0]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[0]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[1]?.coverImageUrl
                                            ? bookChunks[3]?.[1]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[1]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[1]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="130px"
                                    :src="
                                        bookChunks[3]?.[2]?.coverImageUrl
                                            ? bookChunks[3]?.[2]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[2]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[2]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[3]?.coverImageUrl
                                            ? bookChunks[3]?.[3]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[3]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[3]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[4]?.coverImageUrl
                                            ? bookChunks[3]?.[4]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[4]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[4]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[5]?.coverImageUrl
                                            ? bookChunks[3]?.[5]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[5]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[5]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[6]?.coverImageUrl
                                            ? bookChunks[3]?.[6]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[6]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[6]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="130px"
                                    :src="
                                        bookChunks[3]?.[7]?.coverImageUrl
                                            ? bookChunks[3]?.[7]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[7]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[7]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[8]?.coverImageUrl
                                            ? bookChunks[3]?.[8]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[8]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[8]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[9]?.coverImageUrl
                                            ? bookChunks[3]?.[9]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[9]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[9]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[10]?.coverImageUrl
                                            ? bookChunks[3]?.[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[10]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[10]?.price }}</span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div
                            class="p-2 w-full flex flex-col justify-center items-center gap-2 text-lg rounded-lg cursor-pointer hover:bg-ochr-500/10"
                        >
                            <div class="h-[250px] pt-2 content-center">
                                <img
                                    width="135px"
                                    :src="
                                        bookChunks[3]?.[11]?.coverImageUrl
                                            ? bookChunks[3]?.[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bookChunks[3]?.[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bookChunks[3]?.[11]?.name }}
                                </p>
                                <p class="text-base">{{ bookChunks[3]?.[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bookChunks[3]?.[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bookChunks[3]?.[11]?.price }}</span>
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
    import { BookDto } from '@/api/devbookClient';
    import bookPlaceholder from '@/assets/book_placeholder.png';
    import { ref } from 'vue';

    //TODO - save cover images to local DB or server, so it can be fastly load on page load
    //TODO2 - correct swiper and use v-for insted of direct bookChunks indexes for covers
    const error = ref('');
    const bookChunks = ref<BookDto[][]>([]);
    const chunkSize = 12;

    const getProductsCommand = useGetProductsCommand((errorMessage) => (error.value = errorMessage));

    initialize();

    async function initialize() {
        const bookDtos = await getProductsCommand(48, 0, 'Book');
        bookChunks.value = chunkenize(chunkSize, bookDtos);
    }

    function chunkenize<T>(chunkSize: number, arr?: T[]): T[][] {
        if (!arr) {
            return [];
        }

        const result: T[][] = [];

        for (let i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    }
</script>
