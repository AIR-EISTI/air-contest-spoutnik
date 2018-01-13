import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Exercices from '@/components/Exercices'
import CreationExercice from '@/components/CreationExercice'
import User from '@/components/User'
import SearchExercice from '@/components/SearchExercice'

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
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/SearchExercice',
      name: 'SearchExercice',
      component: SearchExercice
    }
  ]
})
