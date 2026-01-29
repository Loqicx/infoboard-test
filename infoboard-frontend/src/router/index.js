import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import("../views/Home.vue")
    },
    {
      path: '/register',
      name: 'register',
      component:  () => import("../views/Register.vue")
    },
    {
      path: '/login',
      name: 'login',
      component:  () => import("../views/Login.vue")
    },
    {
      path: '/infoboard',
      name: 'infoboard',
      component:  () => import("../views/Infoboard.vue")
    },
    
  ]
})

export default router
