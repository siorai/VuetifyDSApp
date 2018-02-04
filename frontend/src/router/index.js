import Vue from 'vue'
import Router from 'vue-router'
import Adduser from '@/components/add-user'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/add-user', component: Adduser, name: 'Adduser'}
  ],
  mode: 'history'
})
