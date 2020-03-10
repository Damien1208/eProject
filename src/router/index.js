import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import CreateItem from '@/components/CreateItem'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/item/create',
      name: 'CreateItem',
      component: CreateItem
    }
  ]
})
