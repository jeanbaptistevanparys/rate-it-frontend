import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/reset.css';
import './assets/css/screen.css';

const _api = 'http://localhost/api/';

const app = createApp(App);

app.use(router);

app.mount('#app');
