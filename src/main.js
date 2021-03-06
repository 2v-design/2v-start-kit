import { createApp } from 'vue'
import App from './App.vue'
const vueApp = createApp(App)

import router from './router'
vueApp.use(router)

// ElementPlus
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
vueApp.use(ElementPlus)

// styles
import 'vite-plugin-vuedoc/style.css'
import './styles/markdown.scss'

// 国际化
createApp(App).use(ElementPlus, {
  locale: zhCn
})

// pinia (vuex-next)
import { createPinia } from 'pinia'
const pinia = createPinia()
vueApp.use(pinia)

// warnHandler
vueApp.config.warnHandler = (msg, vm, trace) => {
  console.info('===warnHandler', msg, vm, trace)
}

// render
vueApp.mount('#app')
