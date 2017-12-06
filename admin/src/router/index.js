import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Exercices from '@/components/Exercices'
import CreationExercice from '@/components/CreationExercice'

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
    },
    {
      path: '/creationExercice',
      name: 'CreationExercice',
      component: CreationExercice
    }
  ]
})
