<template>
  <div class="profile-detail">账户详情</div>
</template>

<script>
export default {
  name: 'ProfileDetail'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profile-detail {
  width: 5rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  background:rgba(121, 121, 121, 0.5);

  @include if_mobile() {
    display: none;
  }
}
</style>
