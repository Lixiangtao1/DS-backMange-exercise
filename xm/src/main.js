import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
// 导入全局的样式
import './assets/css/global.css'
// 全局导入图标
import './assets/icons/iconfont.css'
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
