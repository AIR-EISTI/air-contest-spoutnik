import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Exercice from '@/components/Exercice'
import ListeExercices from '@/components/ListeExercices'
import NotFound from '@/components/errors/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
