import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index.js';

// Create the Vue application
const app = createApp(App);

// Use the router
app.use(router);

// Mount the application
app.mount('#app');