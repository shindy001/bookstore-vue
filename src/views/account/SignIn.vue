<template>
    <div class="h-full bg-ochr-100 mb-6">
        <div class="pt-8 flex flex-col items-center gap-4">
            <RouterLink to="/" class="h-16 w-16">
                <LibraryBig :size="64" :stroke-width="1.5" class="inline mr-1" />
            </RouterLink>
            <h1 class="text-2xl">Sign in to BookStore</h1>
            <div class="w-[400px] flex flex-col gap-4">
                <form v-on:submit.prevent="signin" class="flex flex-col rounded-lg border border-gray-200 bg-white p-6 gap-4">
                    <div>
                        <label class="block mb-2 text-sm font-medium" for="email">Email</label>
                        <PrimeInputText id="email" class="w-full" type="email" v-model="email" placeholder="name@example.com" required />
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
                            required
                            :feedback="false"
                        />
                    </div>
                    <p v-if="error" class="text-red-600">{{ error }}</p>
                    <div>
                        <PrimeButton class="w-full bg-amber-700 hover:bg-amber-900 border-none" label="Sign in" type="submit" />
                    </div>
                </form>
                <div class="rounded-lg bg-white p-6 border border-gray-200">
                    <p class="text-center">
                        New to BookStore?<RouterLink class="ml-1 text-amber-700 hover:underline" to="/register"
                            >Create an account</RouterLink
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
    import { getIdentityApi, AuthTokenLocalStorageKey } from '@/plugins/devbookApiClient';
    import { AxiosError } from 'axios';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const identityApi = getIdentityApi();
    const email = ref();
    const password = ref();
    const error = ref();

    async function signin(): Promise<void> {
        try {
            const response = (await identityApi.identityLoginPOST(undefined, undefined, { email: email.value, password: password.value })).data;
            localStorage.setItem(AuthTokenLocalStorageKey, response.accessToken!);
            router.push("/");

        } catch(apiError: AxiosError | unknown) {
            const axiosApiError = apiError as AxiosError;
            error.value = axiosApiError.response?.status === 401 ? "Invalid Credentials" : "Sorry, there was an error, try again later.";
        }
    }
</script>
