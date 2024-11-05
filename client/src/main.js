import { createApp } from 'vue'
import './assets/sass/style.scss'
import App from './App.vue'
import router from '../src/router/router.js'

createApp(App).use(router).mount('#app')
