import Vue from 'Vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/' , component: Home},
    { path: '/login' , component: Login},
    { path: '*', component: NotFound}
  ]
})

export default router