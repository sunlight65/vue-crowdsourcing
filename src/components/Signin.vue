<template>
  <div class="container">
    <div class="title">{{ $t("msg.sign_in") }}</div>
    <form class="form main-content" @submit.prevent="submit">
      <div class="form-field">
        <label class="iconfont icon-user" for="username"><span class="hidden">{{ $t('msg.username') }}</span></label>
        <input id="username" type="text" class="form-input" :placeholder="$t('msg.email')">
      </div>
      <div class="form-field">
        <label class="iconfont icon-lock" for="password"><span class="hidden">{{ $t('msg.password') }}</span></label>
        <input id="password" type="password" class="form-input" :placeholder="$t('msg.password')">
      </div>
      <div class="form-field">
        <input type="submit" :value="lblSumbit($t('msg.logining'), $t('msg.sign_in'))"
         class="btn" :disabled="isSubmitting" />
      </div>
      <router-link :to="{ path: '/forgot_password' }" class="forgot-password">{{ $t("msg.forgot_password") }}</router-link>
      <router-link :to="{ path: '/sign_up' }" class="sign-up">{{ $t("msg.sign_up") }}</router-link>
    </form>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'

export default {
  name: 'Signin',
  mixins: [formMixin]
}
</script>

<style lang="scss" scoped>
.container {
  background:rgba(58,63,68,0.5);
  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
  width: 4.5rem;
  display: flex;
  flex-direction: column;

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

.form {
  color: #ffff;
  padding:0.25rem 0.25rem 0;
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
