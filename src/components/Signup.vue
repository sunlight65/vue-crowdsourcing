<template>
  <div class="container">
    <poster></poster>
    <div class="register-form">
      <div class="title">{{ $t("txt.sign_up") }}</div>
      <el-form class="main-content" label-width="0.4rem" ref="form" :model="formData" :rules="rules" @submit.native.prevent>
        <el-form-item prop="username">
          <div class="pre-icon iconfont icon-user"></div>
          <el-input v-model="formData.username" :placeholder="$t('txt.email')" autofocus="autofocus"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <div class="pre-icon iconfont icon-lock"></div>
          <el-input type="password" v-model="formData.password" :placeholder="$t('txt.password')"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPass">
          <div class="pre-icon iconfont icon-lock"></div>
          <el-input type="password" v-model="formData.confirmPass" :placeholder="$t('txt.confirm_password')"></el-input>
        </el-form-item>
        <div class="form-field">
          <input type="submit" :value="lblSumbit($t('txt.registering'), $t('txt.sign_up'))"
          class="btn primary" :disabled="isSubmitting" @click="preSumbit"/>
        </div>
        <router-link :to="{ path: '/terms_of_service' }" class="terms-of-service">{{ $t("txt.terms_of_service") }}</router-link>
        <router-link :to="{ path: '/sign_in' }" class="sign-in">{{ $t("txt.sign_in") }}</router-link>
      </el-form>
    </div>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'
import Poster from '@/components/Poster'
import api from '@/assets/js/api'
import validators from '@/assets/js/validators'
import webStorage from '@/assets/js/webStorage'

export default {
  name: 'Signup',
  mixins: [formMixin, validators],
  components: {
    'poster': Poster
  },
  data () {
    const vm = this

    return {
      formData: {
        username: '',
        password: '',
        confirmPass: ''
      },
      rules: {
        username: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.email')]), trigger: 'blur' }
        ],
        password: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.password')]), trigger: 'blur' }
        ],
        confirmPass: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.confirm_password')]), trigger: 'blur' },
          { validator: vm.validators.equalTo, compareTo: 'password', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    preSumbit: function (e) {
      this.submitWrap(e, 'form')
    },
    submit: function (e, postSumbit) {
      const vm = this

      api.post(
        {
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/signin',
          data: {
            username: vm.formData.username,
            password: vm.formData.password,
            confirmPass: vm.formData.confirmPass
          },
          onSuccess: function ({data}) {
            const isSuccess = data.susccess
            const msg = data.data.msg
            const tk = data.data.tk
            if (isSuccess && tk) {
              webStorage.local.set(webStorage.local.KEY.tk, tk)
              vm.$router.push('/profile')
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
}

.register-form {
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

.terms-of-service {
  display: block;
  padding: 0.1rem;
  border-bottom: 1px solid #333;
  text-align: center;
}

.sign-in {
  display: block;
  padding: 0.1rem;
  text-align: center;
}
</style>
