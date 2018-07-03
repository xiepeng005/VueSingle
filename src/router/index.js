import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about/about'
import Introduction from '@/pages/about/introduction'
import NotFound from '@/pages/notFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about/about',
      name: 'about',
      component: About
    },
    {
      path: '/about/introduction/:id',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
