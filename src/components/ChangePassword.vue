<template>
  <div class="change-password">
    <div class="title">{{ $t("msg.change_password") }}</div>
    <form class="main-content" @submit.prevent="submitWrap">
      <div class="form-field">
        <label class="iconfont icon-user" for="old_password"></label>
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
  name: 'Signup',
  mixins: [formMixin]
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
