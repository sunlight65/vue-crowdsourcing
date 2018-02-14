<template>
  <div class="change-password">
    <div class="title">{{ $t("txt.change_password") }}</div>
    <el-form class="main-content" label-width="0.4rem" ref="form" :model="formData" :rules="rules" @submit.native.prevent>
      <el-form-item prop="password">
        <div class="pre-icon iconfont icon-lock"></div>
        <el-input type="password" v-model="formData.password" :placeholder="$t('sentence.old_password')"></el-input>
      </el-form-item>
      <el-form-item prop="newPass">
        <div class="pre-icon iconfont icon-lock"></div>
        <el-input type="password" v-model="formData.newPass" :placeholder="$t('sentence.new_password')"></el-input>
      </el-form-item>
      <el-form-item prop="confirmPass">
        <div class="pre-icon iconfont icon-lock"></div>
        <el-input type="password" v-model="formData.confirmPass" :placeholder="$t('sentence.confirm_password')"></el-input>
      </el-form-item>
      <div class="form-field">
        <input type="submit" :value="lblSumbit($t('txt.saving'), $t('txt.confirm_modify'))"
         class="btn primary" :disabled="isSubmitting" @click="preSumbit" />
        <router-link :to="{ path: '/profile' }" class="btn cancel">{{ $t("txt.cancel") }}</router-link>
      </div>
    </el-form>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'
import api from '@/assets/js/api'
import validators from '@/assets/js/validators'

export default {
  name: 'ChangePassword',
  mixins: [formMixin, validators],
  data () {
    const vm = this

    return {
      formData: {
        password: '',
        newPass: '',
        confirmPass: ''
      },
      rules: {
        password: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.password')]), trigger: 'blur' }
        ],
        newPass: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.password')]), trigger: 'blur' }
        ],
        confirmPass: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.confirm_password')]), trigger: 'blur' },
          { validator: vm.validators.equalTo, compareTo: 'newPass', trigger: 'blur' }
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
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/change_password',
          data: {
            password: vm.formData.password,
            newPass: vm.formData.newPass,
            confirmPass: vm.formData.confirmPass
          },
          onSuccess: function ({data}) {
            const isSuccess = data.susccess
            const msg = data.data.msg
            if (isSuccess) {
              vm.$message({
                showClose: true,
                message: vm.$t('sentence.change_pass_success'),
                type: 'success'
              })
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
.change-password {
  display: flex;
  flex-direction: column;

  @include if_mobile() {
    width: 100%;
  }

  .title {
    font-family: "museo-slab";
    font-size: 0.2rem;
    padding: 0 0.2rem;
    margin:0;
  }

  .main-content {
    color: #ffff;

    input[type="password"] {
      width: 2.5rem;
    }
  }
}
</style>
