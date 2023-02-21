import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.scss';
import FontAwesomeIcon from "./assets/FontAwesomeIcons.js";

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .mount('#app');
