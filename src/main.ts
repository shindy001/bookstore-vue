/**
 * main.ts
 *
 * Bootstraps plugins, layouts and then mounts the App`
 */

import { registerPlugins } from '@/plugins';
import { registerLayouts } from '@/views/layouts/register';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

registerPlugins(app);
registerLayouts(app);

app.mount('#app');
