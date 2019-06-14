import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/animation/Index.vue')
    },
    {
      path: '/transition/sample',
      name: 'transition-sample',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/animation/TransitionSample.vue')
    },
    {
      path: '/animation/sample',
      name: 'animation-sample',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/animation/AnimationSample.vue')
    },
    {
      path: '/animation/shopping-cart',
      name: 'animation-shopping-cart',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/animation/ShoppingCart.vue')
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: () => import('./views/WebSocket.vue')
    },
    {
      path: '/test-ele',
      name: 'TestEle',
      component: () => import('./views/TestEle.vue')
    }
  ]
})
