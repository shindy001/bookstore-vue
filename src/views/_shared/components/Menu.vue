<template>
    <div class="relative border-b-[1px] border-gray-200 h-24">
        <div class="mx-auto max-w-screen-xl h-full" @mouseleave="menuIndex = 0">
            <div class="px-4 flex content-center justify-center join h-full">
                <button
                    @mouseenter="menuIndex = 1"
                    :class="[menuIndex === 1 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none join-item"
                >
                    <div class="flex items-center content-center justify-center">
                        <Book class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                        <div class="h-full w-full">Books</div>
                    </div>
                </button>
                <button
                    @mouseenter="menuIndex = 2"
                    :class="[menuIndex === 2 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-x-[1px] border-gray-200 join-item"
                >
                    <div class="flex items-center content-center justify-center">
                        <Tablet class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                        <div class="h-full w-full">Ebooks</div>
                    </div>
                </button>
                <button
                    @mouseenter="menuIndex = 3"
                    :class="[menuIndex === 3 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-r-[1px] border-gray-200 join-item"
                >
                    <div class="flex items-center content-center justify-center">
                        <BookAudio class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                        <div class="h-full w-full">Audiobooks</div>
                    </div>
                </button>
                <button
                    @mouseenter="menuIndex = 4"
                    :class="[menuIndex === 4 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-r-[1px] border-gray-200 join-item"
                >
                    <div class="flex items-center content-center justify-center">
                        <School class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                        <div class="h-full w-full">Textbooks</div>
                    </div>
                </button>
                <button
                    @mouseenter="menuIndex = 5"
                    :class="[menuIndex === 5 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-r-[1px] border-gray-200 join-item"
                >
                    <div class="flex items-center content-center justify-center">
                        <Pencil class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                        <div class="h-full w-full">Stationery</div>
                    </div>
                </button>
                <button
                    @mouseenter="menuIndex = 6"
                    :class="[menuIndex === 6 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-gray-200 join-item"
                >
                    <div class="flex items-center content-center justify-center">
                        <Gamepad class="inline h-full w-full mr-2" :stroke-width="1" :size="32" />
                        <div class="h-full w-full">Games</div>
                    </div>
                </button>
            </div>
            <div v-if="menuIndex == 1" class="absolute z-10 left-0 w-full h-[400px] bg-red-400">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-red-200">Books menu</div>
            </div>
            <div v-if="menuIndex == 2" class="absolute z-10 left-0 w-full h-[400px] bg-green-400">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-green-200">E-books menu</div>
            </div>
            <div v-if="menuIndex == 3" class="absolute z-10 left-0 w-full h-[400px] bg-blue-200">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-blue-200">Auditobooks menu</div>
            </div>
            <div v-if="menuIndex == 4" class="absolute z-10 left-0 w-full h-[400px] bg-amber-200">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-amber-200">Textbooks menu</div>
            </div>
            <div v-if="menuIndex == 5" class="absolute z-10 left-0 w-full h-[400px] bg-purple-400">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-purple-200">Stationery menu</div>
            </div>
            <div v-if="menuIndex == 6" class="absolute z-10 left-0 w-full h-[400px] bg-indigo-400">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-indigo-200">Games menu</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Book, Tablet, BookAudio, School, Pencil, Gamepad } from 'lucide-vue-next';

    const menuIndex = ref(0);
</script>
