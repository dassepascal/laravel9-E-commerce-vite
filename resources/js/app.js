import './bootstrap';

 import Alpine from 'alpinejs';

 window.Alpine = Alpine;

 Alpine.start();

import { createApp } from 'vue';
import AddToCart from './components/AddToCart.vue';

const app = createApp();
app.component('AddToCart', AddToCart);

app.mount('#app')


