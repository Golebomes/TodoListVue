import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Todos from '@/components/views/Todos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      // component:
      component: Todos
    }
  ]
})
