import { createApp } from 'vue';
import App from './App.vue';

import './assets/sass/main.scss';
import FontAwesomeIcon from "./assets/icons/FontAwesomeIcons.js";

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount('#app');
