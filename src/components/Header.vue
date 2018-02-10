<template>
  <div class="page-header">
    <router-link class="title strong" :to="{ path: '/' }">{{ $t("msg.brand") }}</router-link>
    <ul :class="{ 'nav-menu': true, 'pop': isHorizontalBurger }">
      <li>menu1</li>
      <li>menu2</li>
      <li>menu3</li>
      <li class="sign-in-up">
        <router-link :to="{ path: '/sign_in' }" class="sign-in btn" @click.native="toggleBurger()">{{ $t("msg.sign_in") }}</router-link>
        <router-link :to="{ path: '/sign_up' }" class="sign-up btn" @click.native="toggleBurger()">{{ $t("msg.sign_up") }}</router-link>
      </li>
    </ul>
    <div :class="{ 'iconfont icon-view-list burger': true, 'clockwise': isHorizontalBurger }" @click="toggleBurger()"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isHorizontalBurger: false
    }
  },
  methods: {
    toggleBurger () {
      this.isHorizontalBurger = !this.isHorizontalBurger
    }
  }
}
</script>

<style lang="scss" scoped>
$fontColor: #ddd;
$fontHoverColor: #fff;
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
  flex-grow: 1;

  @include if_mobile() {
    width: 2rem;
    flex-grow: 0;
    position: absolute;
    left: 0;
    top: $headerHeight;
    transition: all .3s ease-in-out;
    opacity: 0;
    visibility:hidden;
    background-color: #2b2b2b;

    &.pop {
      opacity: 1;
      visibility:visible;
    }
  }

  li {
    float: left;
    padding: 0.1rem;
    cursor: pointer;
    &:hover {
      color: $fontHoverColor;
    }

    @include if_mobile() {
      float: none;
      background-color: #888;
    }

    &.sign-in-up {
      float: right;
      display: flex;
      justify-content: space-around;

      & a {
        padding: 0 0.05rem;
      }

      @include if_mobile() {
        float: none;
      }
    }
  }
}

.title {
  display: block;
  padding: 0.1rem;
  font-weight: 700;
  color: #fff;
}

.burger {
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
