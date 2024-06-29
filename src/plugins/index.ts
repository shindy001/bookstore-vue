/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { registerPrimeVue } from "./primevue";
import router from './router';

// Types
import type { App } from 'vue';

export function registerPlugins(app: App) {
    app.use(router);
    registerPrimeVue(app);
}
