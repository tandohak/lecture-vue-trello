import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

new Vue({ 
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})
