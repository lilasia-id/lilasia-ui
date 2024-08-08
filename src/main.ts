import App from '@/App.vue'
import router from '@/router'
import '@/style.css'
import 'lilasia-icons/dist/style.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

const app = createApp(App)

app.use(createPinia()).use(router)
app.mount('#app')
