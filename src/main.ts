import { createApp } from 'vue';
import { vMaska } from 'maska';
import App from './App.vue';
import router from './router';
import { setupStore } from './stores';
import 'virtual:windi.css';

const app = createApp(App);
setupStore(app);
app.use(router);
app.directive('maska', vMaska);
app.mount('#app');

