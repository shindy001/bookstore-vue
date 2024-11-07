/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import router from './router';
import type { App } from 'vue';
import { registerPinia } from './pinia';
import { registerPrimeVue } from './primevue';
import { registerSwiper } from './swiper';
import { initializeDevbookClientApis } from './devbookApiClient';
import { registerAuthenticationInterceptors } from "./authentication";

export function registerPlugins(app: App) {
    app.use(router);
    registerPinia(app);
    registerPrimeVue(app);
    registerSwiper();
    initializeDevbookClientApis();
    registerAuthenticationInterceptors();
}
