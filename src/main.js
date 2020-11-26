import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TopTitle from '@/components/TopTitle.vue'
Vue.component('top-title',TopTitle)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
