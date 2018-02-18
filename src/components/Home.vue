<template>
  <div class="container">
    首页Dashboard
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.container {
  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
  width: 7rem;
  margin: 0.3rem auto;

  height: 5rem;
  line-height: 5rem;
  text-align: center;

  @include if_mobile() {
    width: 100%;
  }
}
</style>
