import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.provide("api", "http://127.0.0.1:8000/")
app.provide("primary_color", "blue")
app.use(createPinia())
app.use(router)
app.use(WaveUI)
app.mount('#app')
