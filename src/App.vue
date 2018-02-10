<template>
  <div id="app">
    <page-header></page-header>
      <keep-alive>
        <router-view/>
      </keep-alive>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/Header'
import PageFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    'page-header': PageHeader,
    'page-footer': PageFooter
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
