<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$fontColor: #333;
$pageColor: #ededf2;

@include html();
@include body($pageColor, $fontColor);
@include mobile();
@include common();

body {
  min-height: 100%;
}

#app {
  width: 100%;
}
</style>
