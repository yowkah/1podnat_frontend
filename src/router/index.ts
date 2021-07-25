import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import SignIn from '@/views/SignIn.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = false;

  if (to.path !== '/signin' && !isAuthenticated) {
    next({ path: 'signin' });
  } else if (to.path === '/signin' && isAuthenticated) {
    next({ path: '/' });
  } else if (!routes.some((route) => route.path === to.path)) {
    next({ path: '/' });
  } else {
    next();
  }
})

export default router
