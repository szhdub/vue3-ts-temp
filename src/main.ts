import { createApp } from 'vue'
// 引入模板的全局样式
import '@/styles/index.scss'
import './style.css'
import App from './App.vue'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import pinia from './store'



const app = createApp(App)


app.use(ElementPlus, {
    locale: zhCn,
})
app.use(ElementPlus)

app.use(pinia)
app.use(router)

app.mount('#app')
