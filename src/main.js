import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { registerServiceWorker, precacheVideo } from './utils/cacheManager';
import video from '@/assets/videos/eq-onboarding.mp4';

const app = createApp(App);
app.use(router).use(store);
app.mount('#app');

// Регистрируем Service Worker при загрузке приложения
registerServiceWorker();

// Предварительное кэширование видео при загрузке приложения
precacheVideo(video);
