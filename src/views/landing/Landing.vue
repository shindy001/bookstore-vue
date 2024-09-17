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
                                        newReleases[0]?.coverImageUrl ? newReleases[0]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[0]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[0]?.price }}</span>
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
                                        newReleases[1]?.coverImageUrl ? newReleases[1]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[1]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[1]?.price }}</span>
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
                                        newReleases[2]?.coverImageUrl ? newReleases[2]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[2]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[2]?.price }}</span>
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
                                        newReleases[3]?.coverImageUrl ? newReleases[3]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[3]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[3]?.price }}</span>
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
                                        newReleases[4]?.coverImageUrl ? newReleases[4]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[4]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[4]?.price }}</span>
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
                                        newReleases[5]?.coverImageUrl ? newReleases[5]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[5]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[5]?.price }}</span>
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
                                        newReleases[6]?.coverImageUrl ? newReleases[6]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[6]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[6]?.price }}</span>
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
                                        newReleases[7]?.coverImageUrl ? newReleases[7]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[7]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[7]?.price }}</span>
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
                                        newReleases[8]?.coverImageUrl ? newReleases[8]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[8]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[8]?.price }}</span>
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
                                        newReleases[9]?.coverImageUrl ? newReleases[9]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="newReleases[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[9]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[9]?.price }}</span>
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
                                        newReleases[10]?.coverImageUrl
                                            ? newReleases[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="newReleases[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[10]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[10]?.price }}</span>
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
                                        newReleases[11]?.coverImageUrl
                                            ? newReleases[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="newReleases[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ newReleases[11]?.name }}
                                </p>
                                <p class="text-base">{{ newReleases[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ newReleases[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ newReleases[11]?.price }}</span>
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
                                        commingSoon[0]?.coverImageUrl ? commingSoon[0]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[0]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[0]?.price }}</span>
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
                                        commingSoon[1]?.coverImageUrl ? commingSoon[1]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[1]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[1]?.price }}</span>
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
                                        commingSoon[2]?.coverImageUrl ? commingSoon[2]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[2]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[2]?.price }}</span>
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
                                        commingSoon[3]?.coverImageUrl ? commingSoon[3]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[3]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[3]?.price }}</span>
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
                                        commingSoon[4]?.coverImageUrl ? commingSoon[4]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[4]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[4]?.price }}</span>
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
                                        commingSoon[5]?.coverImageUrl ? commingSoon[5]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[5]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[5]?.price }}</span>
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
                                        commingSoon[6]?.coverImageUrl ? commingSoon[6]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[6]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[6]?.price }}</span>
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
                                        commingSoon[7]?.coverImageUrl ? commingSoon[7]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[7]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[7]?.price }}</span>
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
                                        commingSoon[8]?.coverImageUrl ? commingSoon[8]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[8]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[8]?.price }}</span>
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
                                        commingSoon[9]?.coverImageUrl ? commingSoon[9]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="commingSoon[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[9]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[9]?.price }}</span>
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
                                        commingSoon[10]?.coverImageUrl
                                            ? commingSoon[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="commingSoon[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[10]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[10]?.price }}</span>
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
                                        commingSoon[11]?.coverImageUrl
                                            ? commingSoon[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="commingSoon[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ commingSoon[11]?.name }}
                                </p>
                                <p class="text-base">{{ commingSoon[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ commingSoon[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ commingSoon[11]?.price }}</span>
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
                                        bestSellers[0]?.coverImageUrl ? bestSellers[0]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[0]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[0]?.price }}</span>
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
                                        bestSellers[1]?.coverImageUrl ? bestSellers[1]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[1]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[1]?.price }}</span>
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
                                        bestSellers[2]?.coverImageUrl ? bestSellers[2]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[2]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[2]?.price }}</span>
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
                                        bestSellers[3]?.coverImageUrl ? bestSellers[3]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[3]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[3]?.price }}</span>
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
                                        bestSellers[4]?.coverImageUrl ? bestSellers[4]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[4]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[4]?.price }}</span>
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
                                        bestSellers[5]?.coverImageUrl ? bestSellers[5]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[5]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[5]?.price }}</span>
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
                                        bestSellers[6]?.coverImageUrl ? bestSellers[6]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[6]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[6]?.price }}</span>
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
                                        bestSellers[7]?.coverImageUrl ? bestSellers[7]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[7]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[7]?.price }}</span>
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
                                        bestSellers[8]?.coverImageUrl ? bestSellers[8]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[8]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[8]?.price }}</span>
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
                                        bestSellers[9]?.coverImageUrl ? bestSellers[9]?.coverImageUrl : bookPlaceholder
                                    "
                                    :alt="bestSellers[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[9]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[9]?.price }}</span>
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
                                        bestSellers[10]?.coverImageUrl
                                            ? bestSellers[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bestSellers[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[10]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[10]?.price }}</span>
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
                                        bestSellers[11]?.coverImageUrl
                                            ? bestSellers[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="bestSellers[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ bestSellers[11]?.name }}
                                </p>
                                <p class="text-base">{{ bestSellers[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ bestSellers[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ bestSellers[11]?.price }}</span>
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
                                        justForTheSummer[0]?.coverImageUrl
                                            ? justForTheSummer[0]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[0]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[0]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[0]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[0]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[0]?.price }}</span>
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
                                        justForTheSummer[1]?.coverImageUrl
                                            ? justForTheSummer[1]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[1]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[1]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[1]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[1]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[1]?.price }}</span>
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
                                        justForTheSummer[2]?.coverImageUrl
                                            ? justForTheSummer[2]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[2]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[2]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[2]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[2]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[2]?.price }}</span>
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
                                        justForTheSummer[3]?.coverImageUrl
                                            ? justForTheSummer[3]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[3]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[3]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[3]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[3]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[3]?.price }}</span>
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
                                        justForTheSummer[4]?.coverImageUrl
                                            ? justForTheSummer[4]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[4]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[4]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[4]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[4]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[4]?.price }}</span>
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
                                        justForTheSummer[5]?.coverImageUrl
                                            ? justForTheSummer[5]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[5]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[5]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[5]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[5]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[5]?.price }}</span>
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
                                        justForTheSummer[6]?.coverImageUrl
                                            ? justForTheSummer[6]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[6]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[6]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[6]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[6]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[6]?.price }}</span>
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
                                        justForTheSummer[7]?.coverImageUrl
                                            ? justForTheSummer[7]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[7]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[7]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[7]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[7]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[7]?.price }}</span>
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
                                        justForTheSummer[8]?.coverImageUrl
                                            ? justForTheSummer[8]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[8]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[8]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[8]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[8]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[8]?.price }}</span>
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
                                        justForTheSummer[9]?.coverImageUrl
                                            ? justForTheSummer[9]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[9]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[9]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[9]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[9]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[9]?.price }}</span>
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
                                        justForTheSummer[10]?.coverImageUrl
                                            ? justForTheSummer[10]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[10]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[10]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[10]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[10]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[10]?.price }}</span>
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
                                        justForTheSummer[11]?.coverImageUrl
                                            ? justForTheSummer[11]?.coverImageUrl
                                            : bookPlaceholder
                                    "
                                    :alt="justForTheSummer[11]?.name"
                                />
                            </div>
                            <div>
                                <p class="font-semibold hover:underline hover:underline-offset-2">
                                    {{ justForTheSummer[11]?.name }}
                                </p>
                                <p class="text-base">{{ justForTheSummer[11]?.author }}</p>
                                <p>
                                    <span class="line-through pr-2">${{ justForTheSummer[11]?.retailPrice }}</span>
                                    <span class="font-semibold">${{ justForTheSummer[11]?.price }}</span>
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
    import { useGetProductCategoriesCommand } from '@/commands/products/getProductCategoriesCommand';

    //TODO - save cover images to local DB or server, so it can be fastly load on page load
    //TODO2 - correct swiper and use v-for insted of direct bookChunks indexes for covers
    const error = ref('');
    const newReleases = ref<BookDto[]>([]);
    const commingSoon = ref<BookDto[]>([]);
    const bestSellers = ref<BookDto[]>([]);
    const justForTheSummer = ref<BookDto[]>([]);

    const getProductsCommand = useGetProductsCommand((errorMessage) => (error.value = errorMessage));
    const getProductCategories = useGetProductCategoriesCommand((errorMessage) => (error.value = errorMessage));

    initialize();

    async function initialize() {
        const productCategories = await getProductCategories();
        const newReleasesCategory = productCategories?.find((x) => x.name === 'New Releases');
        const preOrdersCategory = productCategories?.find((x) => x.name === 'Pre-orders');
        const bestSellersCategory = productCategories?.find((x) => x.name === 'Bestsellers');

        if (newReleasesCategory) {
            newReleases.value = (await getProductsCommand(12, 0, 'Book', newReleasesCategory?.id)) ?? [];
        }

        if (preOrdersCategory) {
            commingSoon.value = (await getProductsCommand(12, 0, 'Book', preOrdersCategory?.id)) ?? [];
        }

        if (bestSellersCategory) {
            bestSellers.value = (await getProductsCommand(12, 0, 'Book', bestSellersCategory?.id)) ?? [];
        }

        justForTheSummer.value = (await getProductsCommand(12, 36, 'Book')) ?? [];
    }
</script>
