import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },

    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'emty' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'emty' },

    component: () => import('@/views/Register.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main' },
    component: () => import('@/views/Categories.vue')
  },
  {
    path: '/record',
    name: 'Record',
    meta: { layout: 'main' },
    component: () => import('@/views/Record.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'main' },
    component: () => import('@/views/History.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main' },
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'main' },
    component: () => import('@/views/Planning.vue')
  },
  {
    path: '/detail-record',
    name: 'DetailRecord',
    meta: { layout: 'main' },
    component: () => import('@/views/DetailRecord.vue')
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
