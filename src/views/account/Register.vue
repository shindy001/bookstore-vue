<template>
    <div class="h-full bg-ocher-100 mb-6">
        <div class="pt-8 flex flex-col items-center gap-4">
            <RouterLink to="/" class="h-16 w-16">
                <LibraryBig :size="64" :stroke-width="1.5" class="inline mr-1" />
            </RouterLink>
            <h1 class="text-2xl">Register to BookStore</h1>
            <div class="w-[400px] flex flex-col gap-4">
                <form class="flex flex-col rounded-lg border border-gray-200 bg-white p-6 gap-4">
                    <div>
                        <label class="block mb-2 text-sm font-medium" for="email">Email</label>
                        <PrimeInputText class="w-full" id="email" v-model="email" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium" for="password">Password</label>
                        <PrimePassword
                            id="password"
                            inputClass="w-full"
                            class="w-full"
                            v-model="password"
                            placeholder="password"
                            toggleMask
                        />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium" for="password">Confirm Password</label>
                        <PrimePassword
                            id="password"
                            inputClass="w-full"
                            class="w-full"
                            v-model="confirmPassword"
                            placeholder="password again"
                            toggleMask
                            :feedback="false"
                        />
                    </div>
                    <div>
                        <PrimeButton class="w-full bg-amber-700 hover:bg-amber-900 border-none" label="Register" />
                    </div>
                </form>
                <div class="rounded-lg bg-white p-6 border border-gray-200">
                    <p class="text-center">
                        Already have an account?<RouterLink class="ml-1 text-amber-700 hover:underline" to="/signin"
                            >Sign in</RouterLink
                        >
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { LibraryBig } from 'lucide-vue-next';
    import { ref } from 'vue';

    const email = ref();
    const password = ref();
    const confirmPassword = ref();
</script>
