<template>
  <div class="poster">海报区域</div>
</template>

<script>
export default {
  name: 'Poster'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.poster {
  width: 3rem;
  height: 4.2rem;
  line-height: 4.2rem;
  background:rgba(121, 121, 121, 0.5);
  text-align: center;

  @include if_mobile() {
    display: none;
  }
}
</style>
