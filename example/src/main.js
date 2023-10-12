import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 我们的组件 input 依赖于 element-ui，example 项目同样先安装再引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import zztest from '@zztest/comp'
import '@zztest/comp/ui/es/style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus)
app.use(zztest)

app.mount('#app')
