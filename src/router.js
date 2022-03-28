import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from './pages/HomePage.vue'
import Page from './pages/PagePage.vue'

export default createRouter({
  history: createWebHashHistory (),
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