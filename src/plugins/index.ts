/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import { registerPrimeVue } from './primevue';
import { registerSwiper } from './swiper';
import router from './router';
import type { App } from 'vue';

export function registerPlugins(app: App) {
    app.use(router);
    registerPrimeVue(app);
    registerSwiper();
}
