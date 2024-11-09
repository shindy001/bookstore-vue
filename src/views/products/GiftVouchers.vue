<template>
    <div class="flex flex-col gap-12">
        <div class="py-2 bg-ochr-100">
            <div class="flex mx-auto max-w-screen-xl px-4">
                <a href="/"><House :size="24" class="inline mr-1" /></a>

                <div>&gt;<span class="mx-1">Gift Vouchers</span></div>
            </div>
        </div>
        <div>
            <div class="mx-auto max-w-screen-xl px-4">
                <div class="card p-4 bg-ochr-100 rounded-lg">
                    <p class="text-4xl font-bold">Gift Vouchers</p>
                    <p>Comming soon...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { House } from 'lucide-vue-next';
</script>
