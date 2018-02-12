<template>
  <div class="container">
    <poster></poster>
    <div class="login-form">
      <div class="title">{{ $t("msg.sign_in") }}</div>
      <form class="main-content" @submit.prevent="submitWrap">
        <div class="form-field">
          <label class="iconfont icon-user" for="username"><span class="hidden">{{ $t('msg.username') }}</span></label>
          <input name="username" type="text" class="form-input" :placeholder="$t('msg.email')" v-model="username" autofocus="autofocus">
        </div>
        <div class="form-field">
          <label class="iconfont icon-lock" for="password"><span class="hidden">{{ $t('msg.password') }}</span></label>
          <input name="password" type="password" class="form-input" :placeholder="$t('msg.password')" v-model="password">
        </div>
        <div class="form-field">
          <input type="submit" :value="lblSumbit($t('msg.logining'), $t('msg.sign_in'))"
          class="btn primary" :disabled="isSubmitting" />
        </div>
        <router-link :to="{ path: '/forgot_password' }" class="forgot-password">{{ $t("msg.forgot_password") }}</router-link>
        <router-link :to="{ path: '/sign_up' }" class="sign-up">{{ $t("msg.sign_up") }}</router-link>
      </form>
    </div>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'
import api from '@/assets/js/api'
import webStorage from '@/assets/js/webStorage'
import Poster from '@/components/Poster'

export default {
  name: 'Signin',
  mixins: [formMixin],
  components: {
    'poster': Poster
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit: function (e, postSumbit) {
      const vm = this

      api.post(
        {
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/login',
          data: {
            username: vm.username,
            password: vm.password
          },
          onSuccess: function ({data}) {
            const tk = data.data.tk
            if (tk) {
              webStorage.local.set(webStorage.local.KEY.tk, tk)
              vm.$router.push('/profile')
            }
          },
          onFinally: postSumbit
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.container {

  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
  width: 7rem;
  display: flex;
  margin: 0.3rem auto;

  @include if_mobile() {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
}

.login-form {
  width: 4rem;
  background:rgba(58,63,68,0.5);

  @include if_mobile() {
    width: 100%;
  }
}

.title {
  font-family: "museo-slab";
  font-size: 0.2rem;
  text-align: center;
  padding: 0.2rem 0.2rem 0;
  margin:0;
}

.main-content {
  color: #ffff;
  padding:0.25rem 0.25rem 0;

  input {
    width: 100%;
  }
}

.forgot-password {
  display: block;
  padding: 0.1rem;
  border-bottom: 1px solid #333;
  text-align: center;
}

.sign-up {
  display: block;
  padding: 0.1rem;
  text-align: center;
}
</style>
