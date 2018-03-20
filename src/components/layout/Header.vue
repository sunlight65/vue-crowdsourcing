<template>
  <div class="page-header">
    <router-link class="title strong" :to="{ path: '/' }">{{ $t("txt.brand") }}</router-link>
    <el-menu :class="{ 'nav-menu': true, 'pop': isVerticalBurger }" background-color="#616161" @select="handleSelect">
      <el-menu-item index="1">
        <router-link :to="{ path: '/trade' }">{{ $t("txt.trade") }}</router-link>
      </el-menu-item>
      <el-menu-item index="2">menu2</el-menu-item>
      <el-menu-item index="3">menu3</el-menu-item>
      <el-menu-item index="4" class="sign-in-up" v-if="!isLogined">
        <router-link :to="{ path: '/sign_in' }" class="sign-in btn frame-fake" @click.native="toggleBurger()">{{ $t("txt.sign_in") }}</router-link>
        <router-link :to="{ path: '/sign_up' }" class="sign-up btn frame" @click.native="toggleBurger()">{{ $t("txt.sign_up") }}</router-link>
      </el-menu-item>
      <el-submenu index="4" class="avater-dropdown" v-if="isLogined">
        <template slot="title">
          <img class="avater-dropdown-link" src="/static/img/user_default_pic.png" alt="User pic">
        </template>
        <el-menu-item index="4-1">
          <router-link :to="{ path: '/profile' }">{{ $t("txt.my_account") }}</router-link>
        </el-menu-item>
        <el-menu-item index="4-2">{{ $t('txt.sign_out') }}</el-menu-item>
      </el-submenu>
    </el-menu>
    <div :class="{ 'iconfont icon-view-list burger': true, 'clockwise': isVerticalBurger }" @click="toggleBurger()"></div>
  </div>
</template>

<script>
import api from '@/assets/js/api'

export default {
  name: 'Header',
  props: ['isLogined'],
  data () {
    return {
      avaterUrl: '',
      isVerticalBurger: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.isVerticalBurger = false
    }
  },
  methods: {
    toggleBurger () {
      this.isVerticalBurger = !this.isVerticalBurger
    },
    handleSelect (key, keyPath) {
      if (key === '4-2') {
        api.logout(this)
      }
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
  z-index: 12;
  min-width: 6rem;

  @include if_mobile() {
    justify-content: center;
    min-width: auto;
  }
}

.nav-menu {
  flex-grow: 1;
  border-bottom: none;

  @include if_mobile() {
    width: 1.2rem;
    flex-grow: 0;
    position: absolute;
    left: 0;
    top: $headerHeight;
    transition: all .3s ease-in-out;
    opacity: 0;
    visibility:hidden;
    background-color: #2b2b2b;
    z-index: 10;

    &.pop {
      opacity: 1;
      visibility:visible;
    }
  }

  li {
    float: left;
    height: 0.5rem;
    line-height: 0.5rem;
    min-width: auto;
    font-weight: bold;
    border-left: 1px solid #797979;
    cursor: pointer;
    color: #ddd;

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
        margin: 0.1rem 0.02rem;
        line-height: 0.3rem;
        height: 0.3rem;
      }

      @include if_mobile() {
        float: none;
      }
    }

    &.avater-dropdown {
      float: right;
      width: 0.9rem;
      border-left: none;

      @include if_mobile() {
        float: none;
        height: 0.5rem;
        width: auto;
      }

      li {
        width: 100%;
      }
    }
  }

  a {
    color: $fontHoverColor;
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

.avater-dropdown-link {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.2rem;
}
</style>

<style lang="scss">
.nav-menu {
  .el-submenu__title {
    height: 0.5rem;
    line-height: 0.5rem;
  }

  .avater-dropdown {
    .el-menu {
      margin-left: -0.4rem;

      @include if_mobile() {
          margin-left: 0;
      }
    }

    .el-submenu__icon-arrow {
      left: 0.65rem;
      right: auto;
    }
  }
}
</style>
