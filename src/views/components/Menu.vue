<script setup lang="ts">
    import { ref } from 'vue';

    const menuIndex = ref(0);
</script>

<template>
    <div class="relative border-b-[1px] border-gray-200">
        <div class="mx-auto max-w-screen-xl" @mouseleave="menuIndex = 0">
            <div class="px-4 flex content-center justify-center join">
                <button
                    @mouseenter="menuIndex = 1"
                    :class="[menuIndex === 1 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none join-item"
                >
                    Books
                </button>
                <button
                    @mouseenter="menuIndex = 2"
                    :class="[menuIndex === 2 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-x-[1px] border-gray-200 join-item"
                >
                    E-books
                </button>
                <button
                    @mouseenter="menuIndex = 3"
                    :class="[menuIndex === 3 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-x-[1px] border-gray-200 join-item"
                >
                    Auditbooks
                </button>
                <button
                    @mouseenter="menuIndex = 4"
                    :class="[menuIndex === 4 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-x-[1px] border-gray-200 join-item"
                >
                    Textbooks
                </button>
                <button
                    @mouseenter="menuIndex = 5"
                    :class="[menuIndex === 5 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-x-[1px] border-gray-200 join-item"
                >
                    Stationery
                </button>
                <button
                    @mouseenter="menuIndex = 6"
                    :class="[menuIndex === 6 ? 'bg-black text-white' : 'hover:bg-black hover:text-white']"
                    class="p-6 rounded-none border-l-[1px] border-gray-200 join-item"
                >
                    Games
                </button>
            </div>
            <div v-if="menuIndex == 1" class="absolute left-0 w-full h-[400px] bg-red-400">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-red-200">Books menu</div>
            </div>
            <div v-if="menuIndex == 2" class="absolute left-0 w-full h-[400px] bg-green-400">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-green-200">E-books menu</div>
            </div>
            <div v-if="menuIndex == 3" class="absolute left-0 w-full h-[400px] bg-blue-200">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-blue-200">Auditobooks menu</div>
            </div>
            <div v-if="menuIndex == 4" class="absolute left-0 w-full h-[400px] bg-amber-200">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-amber-200">Textbooks menu</div>
            </div>
            <div v-if="menuIndex == 5" class="absolute left-0 w-full h-[400px] bg-purple-200">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-purple-200">Stationery menu</div>
            </div>
            <div v-if="menuIndex == 6" class="absolute left-0 w-full h-[400px] bg-indigo-400">
                <div class="mx-auto w-full h-full max-w-screen-xl bg-indigo-200">Games menu</div>
            </div>
        </div>
    </div>
</template>
