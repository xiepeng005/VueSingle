import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import NotFound from '@/pages/notFound'
import About from '@/pages/about/about'
import Introduction from '@/pages/about/introduction'
import InterestFree from '@/pages/trade/interestFree'
import DayTrade from '@/pages/trade/dayTrade'
import MonthTrade from '@/pages/trade/monthTrade'
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
      path: '/trade/interestFree',
      name: 'interestFree',
      component: InterestFree
    },
    {
      path: '/trade/dayTrade',
      name: 'dayTrade',
      component: DayTrade
    },
    {
      path: '/trade/monthTrade',
      name: 'monthTrade',
      component: MonthTrade
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
