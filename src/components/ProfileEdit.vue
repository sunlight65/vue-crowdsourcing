<template>
  <div class="profile-edit">
    <div class="title">{{ $t("msg.modify_profile") }}</div>
    <form class="main-content" @submit.prevent="submitWrap">
      <div class="form-field avater">
        <div>{{ $t('msg.avater') }}</div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <el-button size="small" type="primary">{{ $t('msg.select_file') }}</el-button>
          <div slot="tip" class="el-upload__tip">{{ $t('sentence.upload_tip') }}</div>
        </el-upload>
      </div>
      <div class="form-field">
        <label class="iconfont icon-lock" for="old_password"></label>
        <input name="old_password" type="password" class="form-input" :placeholder="$t('sentence.old_password')" autofocus="autofocus">
      </div>
      <div class="form-field">
        <label class="iconfont icon-lock" for="new_password"></label>
        <input name="new_password" type="password" class="form-input" :placeholder="$t('sentence.new_password')">
      </div>
      <div class="form-field">
        <label class="iconfont icon-lock" for="confirm_password"></label>
        <input id="confirm_password" type="password" class="form-input" :placeholder="$t('sentence.confirm_password')">
      </div>
      <div class="form-field">
        <input type="submit" :value="lblSumbit($t('msg.saving'), $t('msg.confirm_modify'))"
         class="btn primary" :disabled="isSubmitting" />
        <router-link :to="{ path: '/profile' }" class="btn cancel">{{ $t("msg.cancel") }}</router-link>
      </div>
    </form>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'

export default {
  name: 'ProfileEdit',
  mixins: [formMixin],
  data () {
    return {
      imageUrl: '/static/img/user_default_pic.png'
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
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
