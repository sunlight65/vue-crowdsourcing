<template>
  <div class="main-content">
    <div class="profile">
      <div class="base-info">
        <div class="content-bar">
          <img :src="profile.userPic" alt="User pic" class="user-pic" />
          <div class="info-table">
            <div class="strong">{{ profile.userName }}</div>
            <div>{{ profile.email }}</div>
            <div class="small">{{ $t("txt.last_login") + ' ' + profile.lastLoginTime }}</div>
          </div>
        </div>
        <div class="btn-bar">
          <router-link :to="{ path: '/profile/edit' }" class="btn primary">{{ $t("txt.profile_settings") }}</router-link>
          <router-link :to="{ path: '/profile/change_password' }" class="btn primary">{{ $t("txt.change_password") }}</router-link>
          <a href="javascript:" class="btn primary" @click="logout">{{ $t("txt.sign_out") }}</a>
        </div>
      </div>
      <div class="auth-info">
        <p class="iconfont icon-businesscard">{{ $t("txt.id_verification") }}</p>
        <p class="iconfont icon-duigou">{{ $t("txt.email_verification") }}</p>
        <p class="iconfont icon-duigou">{{ $t("txt.advanced_verification") }}</p>
      </div>
      <div class="security-info">
        <p class="iconfont icon-security">{{ $t("txt.security_verification") }}</p>
        <p class="iconfont icon-duigou">{{ $t("txt.phone_verification") }}</p>
      </div>
    </div>
    <router-view class="sub-view"/>
  </div>
</template>

<script>
import api from '@/assets/js/api'

export default {
  name: 'Profile',
  data () {
    return {
      profile: {
        userPic: '/static/img/user_default_pic.png'
      }
    }
  },
  activated () {
    this.getProfile()
  },
  methods: {
    getProfile () {
      const vm = this

      api.get(
        {
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/profile',
          onSuccess: function ({data}) {
            data = data.data
            vm.profile = {
              userPic: data.userPic,
              userName: data.userName,
              email: data.email,
              lastLoginTime: data.lastLoginTime
            }
          }
        }
      )
    },
    logout () {
      const vm = this

      api.logout(vm)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-content {
  display: flex;

  @include if_mobile() {
    flex-direction: column;
  }
}

.profile {
  min-width: 3.45rem;
  @include if_mobile() {
    min-width: 100%;
  }
}

.sub-view {
  margin-left: 0.5rem;
  @include if_mobile() {
    margin: 0;
  }
}

@mixin icons() {
  .iconfont {
    font-size: 1em;
  }

  .icon-duigou:before {
    font-size: 0.2rem;
    position: relative;
    top: 0.02rem;
    margin-right: 0.1rem;
    margin-left: 0.02rem;
  }
}

.content-bar {
  display: flex;

  .user-pic {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  }
  .info-table {
    flex-grow: 1;
    margin-left: 0.2rem;
  }
}

.btn-bar {
  padding: 0.2rem 0;

  .btn {
    margin: 0.02rem;
    display: inline-block;
  }
}

.auth-info {
  border-top: #E1E2EA solid 1px;

  .icon-businesscard {
    font-weight: bold;

    &:before {
      position: relative;
      top: 0.05rem;
      font-size: 0.32rem;
      font-weight: normal;
    }
  }

  @include icons();
}

.security-info {
  border-top: #E1E2EA solid 1px;

  .icon-security {
    font-weight: bold;

    &:before {
      position: relative;
      top: 0.04rem;
      left: -0.02rem;
      margin-right: 0.04rem;
      font-size: 0.28rem;
      font-weight: normal;
    }
  }

  @include icons();
}
</style>
