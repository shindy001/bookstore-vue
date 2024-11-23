<template>
    <div class="h-full bg-ocher-100 mb-6">
        <div class="pt-8 flex flex-col items-center gap-4">
            <RouterLink to="/" class="h-16 w-16">
                <LibraryBig :size="64" :stroke-width="1.5" class="inline mr-1" />
            </RouterLink>
            <h1 class="text-2xl">Register to BookStore</h1>
            <div class="w-[400px] flex flex-col gap-4">
                <form
                    v-on:submit.prevent="register"
                    class="flex flex-col rounded-lg border border-gray-200 bg-white p-6 gap-4">
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
                    <p v-if="error" class="text-red-600">{{ error }}</p>
                    <div>
                        <PrimeButton
                            class="w-full bg-amber-700 hover:bg-amber-900 border-none"
                            label="Register"
                            type="submit"
                        />
                    </div>
                </form>

                <div v-if="registrationSuccessful" class="rounded-lg bg-white p-6 border border-gray-200">
                  <div class="flex gap-4 items-center">
                    <CircleCheckBig :size="36" :stroke-width="1.5" class="inline mr-1 text-green-800" />
                    <div class="flex flex-col gap-1">
                      <span>Registration was successful, <RouterLink class="ml-1 text-amber-700 hover:underline" :to='"/signin?email=" + email'>Sign in</RouterLink></span>
                    </div>
                  </div>
                </div>
                <div v-else class="rounded-lg bg-white p-6 border border-gray-200">
                    <p class="text-center">
                      <span>Already have an account?</span>
                      <RouterLink class="ml-1 text-amber-700 hover:underline" to="/signin">Sign in</RouterLink>
                    </p>
                </div>
                <div class="rounded-lg bg-white p-6 border border-gray-200 items-center content-center">
                  <p class="text-red-600 flex items-center gap-4">
                    <TriangleAlert :size="64" :stroke-width="1.5" class="inline mr-1" />
                    <span>Your data can be deleted at any time, this is not a production ready application.</span>
                  </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { LibraryBig, CircleCheckBig, TriangleAlert } from 'lucide-vue-next';
    import { ref } from 'vue';
    import { useRegisterCommand } from "@/commands/account/registerCommand";

    const email = ref();
    const password = ref();
    const confirmPassword = ref();
    const error = ref();
    const registrationSuccessful = ref(false);
    const registerCommand = useRegisterCommand((errorMessage) => (error.value = errorMessage));

    async function register(): Promise<void> {
      error.value = "";
      if (password.value !== confirmPassword.value) {
          error.value = 'Passwords do not match';
      } else if (await registerCommand(email.value, password.value)) { 
        registrationSuccessful.value = true;
      }
    }
</script>
