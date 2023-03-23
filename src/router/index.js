import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'homeContent',
        component: () => import('../views/HomeContent.vue')
      },
      {
        path: '/article_detail/:id',
        name: 'article_detail',
        props: true,
        component: () => import('../components/ArticleDetail.vue')
      },
      {
        path: '/archive',
        name: 'archive',
        component: () => import('../views/ArchiveView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

export default router
