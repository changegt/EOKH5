import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main.vue'
import Cooperation from '@/views/Cooperation.vue'
import Download from '@/views/Download.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/cooperation',
      name: 'Cooperation',
      component: Cooperation
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})
