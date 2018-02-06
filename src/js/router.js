import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import ForgotPassword from '@/components/ForgotPassword'
import messages from './messages'

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
        title: $(messages.cn.msg.sign_in)
      }
    },
    {
      path: '/sign_up',
      component: Signup,
      meta: {
        title: $(messages.cn.msg.sign_up)
      }
    },
    {
      path: '/forgot_password',
      component: ForgotPassword,
      meta: {
        title: $(messages.cn.msg.forgot_password)
      }
    }
  ]
})
