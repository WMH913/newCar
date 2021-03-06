import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/Show'
import Brand from '@/components/Brand'
import Details from '@/components/Details'
import Inquire from '@/components/Inquire'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Show},
    {path: '/brand',component: Brand},
    {path: '/details',component: Details},
    {path: '/inquire',component: Inquire},
    {path: '/gallery',component: Gallery},
  ]
})
