import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/Footer.vue';
import Footer from '../views/Footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
    },
 
    {
    path: '/tabs/',
    component : Footer,
    children: [
      {
        path: '/index',
        component: () => import('@/views/index/uwu.vue')
      },
        {
          path: '/ACTIVITY1',
          component: () => import('@/views/ACTIVITY1/index1.vue')
        },
        {
          path: '//ACTIVITY2',
          component: () => import('@/views/ACTIVITY2/index2.vue')
        },
        {
          path: '//ACTIVITY3',
          component: () => import('@/views/ACTIVITY3/index3.vue')
        },
        {
          path: '//ACTIVITY4',
          component: () => import('@/views/ACTIVITY4/index4.vue')
        },
        {
          path: '//ACTIVITY5',
          component: () => import('@/views/ACTIVITY5/index5.vue')
        },
        {
          path: '//ACTIVITY6',
          component: () => import('@/views/ACTIVITY6/index6.vue')
        },
       ]
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
