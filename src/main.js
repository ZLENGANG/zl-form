import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ZlForm from './lib/index'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(ZlForm)
new Vue({
  render: h => h(App),
}).$mount('#app')
