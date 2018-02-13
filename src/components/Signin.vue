<template>
  <div class="container">
    <poster></poster>
    <div class="login-form">
      <div class="title">{{ $t("txt.sign_in") }}</div>
      <el-form class="main-content" label-width="0.4rem" ref="signinForm" :model="formData" :rules="rules" @submit.native.prevent>
        <el-form-item prop="username">
          <div class="pre-icon iconfont icon-user"></div>
          <el-input v-model="formData.username" :placeholder="$t('txt.email')" autofocus="autofocus"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <div class="pre-icon iconfont icon-lock"></div>
          <el-input type="password" v-model="formData.password" :placeholder="$t('txt.password')"></el-input>
        </el-form-item>
        <div class="form-field">
          <input type="submit" :value="lblSumbit($t('txt.logining'), $t('txt.sign_in'))"
          class="btn primary" :disabled="isSubmitting"  @click="preSumbit"/>
        </div>
        <router-link :to="{ path: '/forgot_password' }" class="forgot-password">{{ $t("txt.forgot_password") }}</router-link>
        <router-link :to="{ path: '/sign_up' }" class="sign-up">{{ $t("txt.sign_up") }}</router-link>
      </el-form>
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
      formData: {
        username: '',
        password: ''
      },
      rules: this.getRulers()
    }
  },
  methods: {
    preSumbit: function (e) {
      this.submitWrap(e, 'signinForm')
    },
    getRulers: function () {
      const vm = this

      return {
        username: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.email')]), trigger: 'blur' }
        ],
        password: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.password')]), trigger: 'blur' }
        ]
      }
    },
    submit: function (e, postSumbit) {
      const vm = this

      api.post(
        {
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/login',
          data: {
            username: vm.formData.username,
            password: vm.formData.password
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
