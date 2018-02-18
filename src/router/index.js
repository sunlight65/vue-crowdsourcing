import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import ForgotPassword from '@/components/ForgotPassword'
import Profile from '@/components/Profile'
import ProfileDetail from '@/components/ProfileDetail'
import ProfileEdit from '@/components/ProfileEdit'
import ChangePassword from '@/components/ChangePassword'
import ResetPassword from '@/components/ResetPassword'
import Trade from '@/components/Trade'
import messages from '@/assets/js/messages'

Vue.use(Router)

function $ (title) {
  return title
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign_in',
      component: Signin,
      meta: {
        title: $(messages.cn.txt.sign_in)
      }
    },
    {
      path: '/sign_up',
      component: Signup,
      meta: {
        title: $(messages.cn.txt.sign_up)
      }
    },
    {
      path: '/forgot_password',
      component: ForgotPassword,
      meta: {
        title: $(messages.cn.txt.forgot_password)
      }
    },
    {
      path: '/reset_password',
      component: ResetPassword,
      meta: {
        title: $(messages.cn.txt.reset_password)
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: $(messages.cn.txt.my_account)
      },
      children: [
        {
          path: '',
          component: ProfileDetail
        },
        {
          path: 'edit',
          component: ProfileEdit
        },
        {
          path: 'change_password',
          component: ChangePassword
        }
      ]
    },
    {
      path: '/trade',
      component: Trade,
      meta: {
        title: $(messages.cn.txt.trade)
      }
    }
  ]
})
