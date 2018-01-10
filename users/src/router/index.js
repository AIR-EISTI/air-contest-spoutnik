import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Exercice from '@/components/Exercice'
import ListeExercices from '@/components/ListeExercices'
import NotFound from '@/components/errors/NotFound'
import Groupe from '@/components/Groupe'
import ListeGroupe from '@/components/ListeGroups'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/exercice/:id',
      name: 'Exercice',
      component: Exercice
    },
    {
      path: '/exercice',
      name: 'ListeExercices',
      component: ListeExercices
    },
    {
      path: '/groupe',
      name: 'ListeGroupe',
      component: ListeGroupe
    },
    {
      path: '/groupe/:id',
      name: 'Groupe',
      component: Groupe
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/*',
      redirect: {name: 'NotFound'}
    }
  ]
})
