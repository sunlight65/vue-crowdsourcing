<template>
  <div class="page-header">
    <router-link class="title strong" :to="{ path: '/' }">{{ $t("msg.brand") }}</router-link>
    <ul :class="{ 'nav-menu': true, 'pop': isVerticalBurger }">
      <li>menu1</li>
      <li>menu2</li>
      <li class="sign-in-up" v-if="!isLogined">
        <router-link :to="{ path: '/sign_in' }" class="sign-in btn frame-fake" @click.native="toggleBurger()">{{ $t("msg.sign_in") }}</router-link>
        <router-link :to="{ path: '/sign_up' }" class="sign-up btn frame" @click.native="toggleBurger()">{{ $t("msg.sign_up") }}</router-link>
      </li>
      <li class="avater-dropdown" v-if="isLogined">
        <el-dropdown id="avater-dropdown-container" @command="handleCommand">
          <div>
            <img class="avater-dropdown-link" src="/static/img/user_default_pic.png" alt="User pic">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link :to="{ path: '/profile' }">{{ $t("msg.my_account") }}</router-link>
            </el-dropdown-item>
            <el-dropdown-item divided command="logout">{{ $t("msg.sign_out") }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
    <div :class="{ 'iconfont icon-view-list burger': true, 'clockwise': isVerticalBurger }" @click="toggleBurger()"></div>
  </div>
</template>

<script>
import api from '@/assets/js/api'

export default {
  name: 'Header',
  data () {
    return {
      isLogined: false,
      avaterUrl: '',
      isVerticalBurger: false
    }
  },
  created: function () {
    this.updateLoginStatus(this.$route)
  },
  watch: {
    '$route' (to, from) {
      this.updateLoginStatus(to)
      this.isVerticalBurger = false
    }
  },
  methods: {
    toggleBurger () {
      this.isVerticalBurger = !this.isVerticalBurger
    },
    updateLoginStatus (to) {
      const vm = this
      const unauthPagePath = [ '/sign_in', '/sign_up', '/forgot_password' ]
      const toPath = to.fullPath.split('?')[0]
      const ret = unauthPagePath.find((value, index, arr) => {
        return value === toPath
      })
      if (ret) {
        vm.isLogined = false
      } else {
        vm.isLogined = true
      }
    },
    handleCommand (cmd) {
      if (cmd === 'logout') {
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
    padding: 0.05rem 0.1rem;
    font-weight: bold;
    border-left: 1px solid #797979;
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
        margin: 0 0.02rem;
      }

      @include if_mobile() {
        float: none;
      }
    }

    &.avater-dropdown {
      float: right;
      width: 0.6rem;
      border-left: none;

      @include if_mobile() {
        float: none;
        height: 0.5rem;
        width: auto;
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

#avater-dropdown-container {
  width: 0.6rem;
  position: absolute;
  top: 50%;
  margin-top: -0.2rem;

  @include if_mobile() {
    position: relative;
  }

  .avater-dropdown-link {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.2rem;
  }

  .el-icon-arrow-down {
    color: #fff;
    font-weight: bold;
    position: absolute;
    top: 50%;
    margin-top: -0.08rem;
    right: 0;
  }
}
</style>
