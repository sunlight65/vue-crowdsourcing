<template>
  <div class="page-header">
    <div class="title">ABCDEFG</div>
    <ul class="nav-menu">
      <li>menu1</li>
      <li>menu2</li>
      <li>menu3</li>
    </ul>
    <div class="iconfont icon-view-list"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #fff;
$backgroundColor: #616161;
$headerHeight: 0.5rem;

.page-header {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  height: $headerHeight;
  background: $backgroundColor;
  color: $fontColor;

  @include if_mobile() {
    justify-content: center;
  }
}

.nav-menu {
  @include if_mobile() {
    position: absolute;
    left: 0;
    top: $headerHeight;
  }

  li {
    float: left;
    padding: 0.1rem;
    cursor: pointer;

    @include if_mobile() {
      float: none;
      background-color: #888;
    }
  }
}

.title {
  padding: 0.1rem;
}

.icon-view-list {
  display: none;
  position: absolute;
  left: 0.1rem;
  font-size: 0.3rem;
  cursor: pointer;
  transition: transform .3s ease-in-out;

  @include if_mobile() {
    display: block;
  }
}
</style>
