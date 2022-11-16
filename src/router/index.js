import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/noticias',
    name: 'noticias',    
    component: () => import(/* webpackChunkName: "noticias" */ '../views/Noticias.vue'),
    
  },
  {
    path: '/cadastrarnoticias',
    name: 'cadastrarnoticias',    
    component: () => import(/* webpackChunkName: "cadastrarnoticias" */ '../views/CadastrarNoticias.vue'),
  },
  {
    path: '/vernoticias/:id',
    name: 'vernoticias',    
    component: () => import(/* webpackChunkName: "vernoticias" */ '../views/VerNoticias.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
