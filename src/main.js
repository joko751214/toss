import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { clickOutside } from './directive/clickOutside';
import './style.css';

const pinia = createPinia();
createApp(App).directive('click-outside', clickOutside).use(pinia).mount('#app');
