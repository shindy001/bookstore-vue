/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { registerLayouts } from '@/views/layouts/register';


// Components
import App from './App.vue';
import { createApp } from 'vue';

const app = createApp(App);

registerPlugins(app);
registerLayouts(app);

app.mount('#app')
