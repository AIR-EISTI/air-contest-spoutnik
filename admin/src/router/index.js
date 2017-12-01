import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Exercices from '@/components/Exercices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/exercices',
      name: 'Exercices',
      component: Exercices
    }
  ]
})
