// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import App from '@/App'
import router from '@/router'
import messages from '@/assets/js/messages'
import webStorage from '@/assets/js/webStorage'
import '@/assets/scss/element-variables.scss'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(ElementUI)

const lang = webStorage.local.get(webStorage.local.KEY.lang)
const i18n = new VueI18n({
  locale: lang || 'cn',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
