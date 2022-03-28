import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomePage.vue'
import Page from './pages/PagePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page/:pageId',
      name: 'page',
      component: Page,
    }]
})