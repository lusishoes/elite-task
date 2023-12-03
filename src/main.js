import { createPinia } from 'pinia';
import './assets/main.scss';
// import './assets/ui-kit.scss';
import { createApp } from 'vue';

import App from './App.vue';

createApp(App).use(createPinia()).mount('#app');
