<template>
	<h1><LibraryBig :size="32" class="inline" /> AppBar</h1>
	<Button>Vue shadcn btn</Button>
</template>

<script setup lang="ts">
	import { Button } from './ui/button'
	import { LibraryBig } from 'lucide-vue-next';
</script>