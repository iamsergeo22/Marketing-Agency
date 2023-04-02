import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49e90619 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _64d7bf01 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _56ef53a4 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _5a7bfcc7 = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _0df1c60b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _49e90619,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _64d7bf01,
    name: "portfolio"
  }, {
    path: "/service",
    component: _56ef53a4,
    name: "service"
  }, {
    path: "/posts/:slug?",
    component: _5a7bfcc7,
    name: "posts-slug"
  }, {
    path: "/",
    component: _0df1c60b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
