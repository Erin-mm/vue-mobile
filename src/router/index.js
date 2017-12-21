import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = resolve => require(['../components/login/login.vue'], resolve)
const password = resolve => require(['../components/login/password.vue'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'login', component: login },
    { path: '/password', name: 'password', component: password },
  ]
})
