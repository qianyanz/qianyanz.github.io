import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import { naive } from './utils/naive'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
