import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import 'font-awesome/scss/font-awesome.scss'
import './assets/style/index.scss'
import './plugins'

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
