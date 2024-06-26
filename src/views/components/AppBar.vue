<template>
    <nav>
        <div class="flex bg-black text-white h-16 justify-center">
            <div class="flex justify-between p-2 mx-4 w-full items-center max-w-screen-xl">
                <a href="#" class="flex items-center space-x-3">
                    <LibraryBig :size="32" class="inline mr-1" />
                    <span class="text-2xl font-semibold">AppBar</span>
                </a>

                <div class="hidden md:block md:w-[250px] xl:w-[300px] text-black">
                    <div class="relative w-full items-center">
                        <Input
                            id="search"
                            type="search"
                            placeholder="Search..."
                            class="h-9 pl-10 rounded-full border-none focus-visible:ring-offset-0"
                        />
                        <span class="absolute start-0 inset-y-0 flex items-center px-2">
                            <Search class="size-6 text-muted-foreground" />
                        </span>
                    </div>
                </div>

                <div class="flex items-center">
                    <div class="flex gap-4">
                        <a href="#" class="flex items-center gap-2 rounded p-2 hover:bg-white hover:text-black">
                            <CircleUser :size="28" class="inline mr-1" />
                            <span>Sign in</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    import { Input } from '@/lib/components/ui/input';
    import { LibraryBig, Search, CircleUser } from 'lucide-vue-next';
</script>
