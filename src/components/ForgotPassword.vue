<template>
  <div class="container">
    <poster></poster>
    <div class="forgot-password-form">
      <div class="title">{{ $t("txt.forgot_password") }}</div>
      <el-form class="main-content" label-width="0.4rem" ref="form" :model="formData" :rules="rules" @submit.native.prevent>
        <el-form-item prop="email">
          <div class="pre-icon iconfont icon-user"></div>
          <el-input v-model="formData.email" :placeholder="$t('txt.email')" autofocus="autofocus" clearable></el-input>
        </el-form-item>
        <div class="form-field">
          <input type="submit" :value="lblSumbit($t('txt.resetting'), $t('txt.reset_password'))"
          class="btn primary" :disabled="isSubmitting" @click="preSumbit" />
        </div>
        <router-link :to="{ path: '/sign_in' }" class="sign-in">{{ $t("txt.sign_in") }}</router-link>
        <router-link :to="{ path: '/sign_up' }" class="sign-up">{{ $t("txt.sign_up") }}</router-link>
      </el-form>
    </div>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'
import Poster from '@/components/Poster'
import api from '@/assets/js/api'

export default {
  name: 'ForgotPassword',
  mixins: [formMixin],
  components: {
    'poster': Poster
  },
  data () {
    const vm = this

    return {
      formData: {
        email: ''
      },
      rules: {
        email: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.email')]), trigger: 'blur' },
          { type: 'email', message: vm.$t('msg.email'), trigger: 'blur,change' }
        ]
      }
    }
  },
  methods: {
    submit: function (e, postSumbit) {
      const vm = this

      api.post(
        {
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/forget_password',
          data: {
            email: vm.formData.email
          },
          onSuccess: function ({data}) {
            const isSuccess = data.susccess
            const msg = data.data.msg
            if (isSuccess) {
              vm.$router.push('/reset_password')
            } else {
              vm.$message({
                showClose: true,
                message: msg,
                type: 'error'
              })
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

  @include if_mobile() {
    width: 100%;
  }
}

.forgot-password-form {
  width: 4rem;
  background:#efeeee;

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
  text-transform: capitalize;
}

.main-content {
  color: #ffff;
  padding:0.25rem 0.25rem 0;

  input {
    width: 100%;
  }
}

.sign-in {
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
