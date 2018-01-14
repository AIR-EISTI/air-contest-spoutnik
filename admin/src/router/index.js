import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Exercices from '@/components/Exercices'
import CreationExercice from '@/components/CreationExercice'
import User from '@/components/User'
import SearchExercice from '@/components/SearchExercice'
import FileUpload from '@/components/FileUpload'
import NewGroup from '@/components/NewGroup'

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
    },
    {
      path: '/NewGroup',
      name: 'NewGroup',
      component: NewGroup
    },
    {
      path: '/file-upload',
      name: 'FileUpload',
      component: FileUpload
    }
  ]
})
