<template>
    <div class="bg-black text-white h-16 content-center">
        <nav>
            <div class="flex flex-wrap items-center p-2 mx-4">
                <a href="#" class="flex items-center space-x-3">
                    <LibraryBig :size="32" class="inline mr-1" />
                    <span class="self-center whitespace-nowrap text-2xl font-semibold">AppBar</span>
                </a>

                <div class="mx-auto hidden md:block md:w-[250px] xl:w-[300px] text-black">
                    <div class="relative w-full items-center">
                        <Input
                            id="search"
                            type="search"
                            placeholder="Search..."
                            class="h-9 pl-10 rounded-full border-none focus-visible:ring-offset-0"
                        />
                        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                            <Search class="size-6 text-muted-foreground" />
                        </span>
                    </div>
                </div>

                <div class="flex items-center space-x-1 md:order-2 md:space-x-2">
                    <div class="flex gap-4">
                        <a
                            href="#"
                            class="nav-link flex items-center gap-2 rounded p-2 hover:bg-white hover:text-black"
                        >
                            <CircleUser :size="28" class="inline mr-1" />
                            <span>Sign in</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
    import { Input } from '@/lib/components/ui/input';
    import { LibraryBig, Search, CircleUser } from 'lucide-vue-next';
</script>
