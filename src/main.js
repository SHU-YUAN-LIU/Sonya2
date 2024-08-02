//引入sass
import './assets/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus' //引入element-plus
import 'element-plus/dist/index.css' //引入element-plus
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入element-plus icons
//引入饅頭字體
import '@/assets/Mantou_font/_Mantou_font.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component) //引入element-plus icons
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus) //引入element-plus

app.mount('#app')
