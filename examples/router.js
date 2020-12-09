import Vue from 'vue'
import Router from 'vue-router'

import Button from './views/button/Button'
import Radio from './views/radio/Radio'

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
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/',
      redirect: {
        name: 'Button'
      }
    }
  ]
})
