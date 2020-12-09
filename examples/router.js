import Vue from 'vue'
import Router from 'vue-router'

// import StartInstall from './views/table/start/Install.vue'
import Button from './views/button/Button'

import TableTreeHighlight from './views/table/tree/Highlight.vue'
import TableTreeHighlightImp from './views/table/tree/HighlightImp.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'Button',
      component: Button
    },
    {
      path: '/',
      redirect: {
        name: 'Button'
      }
    },
    {
      path: '/table/tree/highlight',
      name: 'TableTreeHighlight',
      component: TableTreeHighlight
    },
    {
      path: '/table/tree/highlightImp',
      name: 'TableTreeHighlightImp',
      component: TableTreeHighlightImp
    }
  ]
})
