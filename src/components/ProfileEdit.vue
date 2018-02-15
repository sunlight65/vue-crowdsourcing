<template>
  <div class="profile-edit">
    <div class="title">{{ $t("txt.modify_profile") }}</div>
    <el-form class="main-content capitalize" label-position="top" ref="form" :model="formData" :rules="rules" @submit.native.prevent>
      <div class="form-field avater">
        <div>{{ $t('txt.avater') }}</div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="formData.imageUrl" :src="formData.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <el-button size="small" type="primary">{{ $t('txt.select_file') }}</el-button>
          <div slot="tip" class="el-upload__tip">{{ $t('sentence.upload_tip') }}</div>
        </el-upload>
      </div>
      <el-form-item :label="$t('txt.username')" prop="username">
        <el-input v-model="formData.username" :placeholder="$t('txt.username')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('txt.phone_num')" prop="cellphone">
        <el-input v-model="formData.cellphone" :placeholder="$t('txt.phone_num')"></el-input>
      </el-form-item>
      <el-form-item :label="$t('txt.language')">
        <el-select v-model="formData.language">
          <el-option :label="$t('txt.chinese')" value="cn"></el-option>
          <el-option :label="$t('txt.english')" value="en"></el-option>
        </el-select>
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
import webStorage from '@/assets/js/webStorage'

export default {
  name: 'ProfileEdit',
  mixins: [formMixin],
  data () {
    const vm = this
    const lang = webStorage.local.get(webStorage.local.KEY.lang)

    return {
      formData: {
        imageUrl: '/static/img/user_default_pic.png',
        username: '',
        cellphone: '',
        language: lang || 'cn'
      },
      rules: {
        username: [
          { required: true, message: vm.$t('msg.required', [vm.$t('txt.username')]), trigger: 'blur' }
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
          url: '/5a7accd7cc09b832453c7e62/crowdsourcing/success',
          data: {
            imageUrl: '/static/img/user_default_pic.png',
            username: vm.formData.username,
            cellphone: vm.formData.cellphone,
            language: vm.formData.language
          },
          onSuccess: function ({data}) {
            const isSuccess = data.susccess
            const msg = data.data.msg
            if (isSuccess) {
              vm.$message.success(vm.$t('msg.change_saved'))
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
    },
    handleAvatarSuccess (res, file) {
      this.formData.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  watch: {
    'formData.language': function (val, oldVal) {
      this.$root.$i18n.locale = val
      webStorage.local.set(webStorage.local.KEY.lang, val)
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-edit {
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
    text-transform: capitalize;
  }

  .main-content {
    color: #ffff;

    .form-field.avater {
      color: #333;
      flex-direction: column;

      .avatar {
        display: block;
        width: 1rem;
        margin: 0.1rem 0;
      }
    }

    input[type="password"] {
      width: 2.5rem;
    }
  }
}
</style>
