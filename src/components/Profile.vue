<template>
  <div class="profile main-content">
    <div class="base-info">
      <div class="content-bar">
        <img :src="profile.userPic" alt="User default pic" class="user-pic" />
        <div class="info-table">
          <div class="strong">{{ profile.userName }}</div>
          <div>{{ profile.email }}</div>
          <div class="small">{{ $t("msg.last_login") + ' ' + profile.lastLoginTime }}</div>
        </div>
      </div>
      <div class="btn-bar">
        <router-link :to="{ path: '/edit_profile' }" class="btn">{{ $t("msg.edit_info") }}</router-link>
        <router-link :to="{ path: '/change_password' }" class="btn">{{ $t("msg.change_password") }}</router-link>
        <a href="javascript:" class="btn" @click="logout">{{ $t("msg.sign_out") }}</a>
      </div>
    </div>
    <div class="auth-info">
      <p class="iconfont icon-businesscard">{{ $t("msg.id_verification") }}</p>
      <p class="iconfont icon-duigou">{{ $t("msg.email_verification") }}</p>
      <p class="iconfont icon-duigou">{{ $t("msg.real_name_verification") }}</p>
    </div>
    <div class="security-info">
      <p class="iconfont icon-security">{{ $t("msg.security_verification") }}</p>
      <p class="iconfont icon-duigou">{{ $t("msg.mobile_verification") }}</p>
    </div>
  </div>
</template>

<script>
import api from '@/assets/js/api'
import webStorage from '@/assets/js/webStorage'

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

      api.post(
        {
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/logout',
          data: {
            username: vm.username,
            password: vm.password
          },
          onSuccess: function ({data}) {
            webStorage.local.clear()
            vm.$router.push('/sign_in')
          }
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
    margin: 0 0.02rem;
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
