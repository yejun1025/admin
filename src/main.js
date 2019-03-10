import Vue from 'vue'
import App from './App.vue'
import router from './lib/router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 抽取出来的axios
import http from './lib/http';
Vue.use(http)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
