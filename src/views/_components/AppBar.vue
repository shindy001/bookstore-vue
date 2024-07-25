<template>
    <div class="w-full bg-black text-white">
        <div class="mx-auto w-full max-w-screen-xl flex justify-between p-2 px-4 items-center">
            <RouterLink to="/" class="flex items-center space-x-3">
                <LibraryBig :size="32" class="inline mr-1" />
                <span class="text-2xl font-semibold">AppBar</span>
            </RouterLink>

            <div class="md:w-[250px] xl:w-[300px] text-black">
                <div class="relative w-full items-center">
                    <input
                        id="search"
                        type="search"
                        placeholder="Search..."
                        class="h-9 p-2 pl-10 rounded-full focus:outline-none"
                    />
                    <span class="absolute start-0 inset-y-0 flex items-center px-2">
                        <Search class="size-6 text-muted-foreground" />
                    </span>
                </div>
            </div>

            <div v-if="userStore.email" class="flex gap-4 items-center">
                <span>{{ userStore.email }}</span>
                <RouterLink
                    v-if="userStore.isAdmin"
                    to="/administration"
                    class="rounded p-2 hover:bg-white hover:text-black"
                    >Administration</RouterLink
                >
                <button class="rounded p-2 hover:bg-white hover:text-black" @click="() => signOut()">Sign out</button>
            </div>
            <RouterLink v-else to="/signin" class="rounded p-2 hover:bg-white hover:text-black">Sign in</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { LibraryBig, Search } from 'lucide-vue-next';
    import { RouterLink } from 'vue-router';
    import { createGetUserInfoCommand } from '@/commands/getUserInfoCommand';
    import { createSignOutCommand } from '@/commands/signOutCommand';
    import { useUserInfoStore } from '@/stores/userInfoStore';

    const getUserInfoCommand = createGetUserInfoCommand();
    const signOutCommand = createSignOutCommand();
    const userStore = useUserInfoStore();

    if (!userStore.email) {
        getUserInfo();
    }

    async function getUserInfo() {
        const infoResponse = await getUserInfoCommand();
        userStore.setUser(infoResponse?.email ?? '', infoResponse?.roles ?? []);
    }

    async function signOut() {
        await signOutCommand();
    }
</script>
