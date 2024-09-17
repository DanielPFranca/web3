import './assets/style/global.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18nApplication } from './i18n/i18n'
import piniaPlugin from "pinia-plugin-persistedstate";

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPlugin)

app.use(pinia)
app.use(router)
app.use(i18nApplication)

app.mount('#app')
