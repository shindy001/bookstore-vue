import { App } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

export function registerPinia(app: App) {
    app.use(pinia);
}
