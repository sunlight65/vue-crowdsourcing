<template>
<el-menu class="mobile-bottom-nav" mode="horizontal" v-if="isLogined">
  <el-menu-item index="1">
    <router-link :to="{ path: '/trade' }">{{ $t("txt.trade") }}</router-link>
  </el-menu-item>
  <el-menu-item index="2">菜单2</el-menu-item>
  <el-menu-item index="3">菜单3</el-menu-item>
  <el-menu-item index="4">
    <router-link :to="{ path: '/profile' }">{{ $t("txt.my_account") }}</router-link>
  </el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'MobileBottomNav',
  props: ['isLogined']
}
</script>

<style lang="scss" scoped>
.mobile-bottom-nav {
  display: none;
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  z-index: 12;

  @include if_mobile() {
    display: flex;
  }
}
</style>
