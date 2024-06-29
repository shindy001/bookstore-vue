import Vue from '@vitejs/plugin-vue';
import ViteFonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
          plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        Vue(),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        }),
        ViteFonts({
            google: {
                families: [
                    {
                        name: 'Roboto',
                        styles: 'wght@100;300;400;500;700;900',
                    },
                ],
            },
        }),
    ],
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@/': fileURLToPath(new URL('./src', import.meta.url)),
            '@/views': fileURLToPath(new URL('./src/views', import.meta.url)),
            '@/plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
            '@/components': fileURLToPath(new URL('./src/views/components', import.meta.url)),
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
        port: 5201,
    },
})
