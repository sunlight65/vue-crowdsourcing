<template>
  <div id="app">
    <page-header :isLogined="isLogined"></page-header>
      <keep-alive>
        <router-view/>
      </keep-alive>
    <page-footer></page-footer>
    <mobile-bottom-nav :isLogined="isLogined"></mobile-bottom-nav>
  </div>
</template>

<script>
import PageHeader from '@/components/layout/Header'
import PageFooter from '@/components/layout/Footer'
import MobileBottomNav from '@/components/MobileBottomNav'

export default {
  name: 'App',
  components: {
    'page-header': PageHeader,
    'page-footer': PageFooter,
    'mobile-bottom-nav': MobileBottomNav
  },
  data () {
    return {
      isLogined: false
    }
  },
  created: function () {
    this.updateLoginStatus(this.$route)
  },
  watch: {
    '$route' (to, from) {
      this.updateLoginStatus(to)
    }
  },
  methods: {
    updateLoginStatus (to) {
      const vm = this
      const unauthPagePath = [ '/sign_in', '/sign_up', '/forgot_password' ]
      const toPath = to.fullPath.split('?')[0]
      const ret = unauthPagePath.find((value, index, arr) => {
        return toPath.indexOf(value) === 0
      })
      if (ret) {
        vm.isLogined = false
      } else {
        vm.isLogined = true
      }
    }
  }
}
</script>

<style lang="scss">
$fontColor: #333;
$pageColor: #F8F9FA;

@include html();
@include body($pageColor, $fontColor);
@include mobile();
@include common();
@include form();
@include theme();

body {
  min-height: 100%;
}

#app {
  width: 100%;
}
</style>
