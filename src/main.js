import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'


// Importando o Mitt
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.$axios = axios;


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


app.use(router)
    .mount('#app')
