// Plugins
import Vue from '@vitejs/plugin-vue'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
          plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        Vue(),
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
            '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@/lib/utils': fileURLToPath(new URL('./src/lib/utils', import.meta.url)),
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
        port: 5201,
    },
})
