import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Signin from '@/components/Signin'

Vue.use(Router)

function $ (title) {
  return title
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/sign_in',
      component: Signin,
      meta: {
        title: $('登录')
      }
    }
  ]
})
