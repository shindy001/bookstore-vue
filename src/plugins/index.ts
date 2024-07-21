/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import router from './router';
import type { App } from 'vue';
import { registerPrimeVue } from './primevue';
import { registerSwiper } from './swiper';
import { initializeDevbookClientApis } from "./devbookApiClient";

export function registerPlugins(app: App) {
    app.use(router);
    registerPrimeVue(app);
    registerSwiper();
    initializeDevbookClientApis();
}
