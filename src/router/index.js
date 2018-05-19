import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Picker from '@/components/Picker/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/picker',
      name: 'Picker',
      component: Picker
    }
  ]
})
