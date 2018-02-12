<template>
  <div class="container">
    <poster></poster>
    <div class="register-form">
      <div class="title">{{ $t("msg.sign_up") }}</div>
      <form class="main-content" @submit.prevent="submitWrap">
        <div class="form-field">
          <label class="iconfont icon-user" for="username"><span class="hidden">{{ $t('msg.username') }}</span></label>
          <input name="username" type="text" class="form-input" :placeholder="$t('msg.email')" autofocus="autofocus">
        </div>
        <div class="form-field">
          <label class="iconfont icon-lock" for="password"><span class="hidden">{{ $t('msg.password') }}</span></label>
          <input name="password" type="password" class="form-input" :placeholder="$t('msg.password')">
        </div>
        <div class="form-field">
          <label class="iconfont icon-lock" for="password-confirm"><span class="hidden">{{ $t('msg.password_confirm') }}</span></label>
          <input name="password-confirm" type="password" class="form-input" :placeholder="$t('msg.password_confirm')">
        </div>
        <div class="form-field">
          <input type="submit" :value="lblSumbit($t('msg.registering'), $t('msg.sign_up'))"
          class="btn primary" :disabled="isSubmitting" />
        </div>
        <router-link :to="{ path: '/terms_of_service' }" class="terms-of-service">{{ $t("msg.terms_of_service") }}</router-link>
        <router-link :to="{ path: '/sign_in' }" class="sign-in">{{ $t("msg.sign_in") }}</router-link>
      </form>
    </div>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'
import Poster from '@/components/Poster'

export default {
  name: 'Signup',
  mixins: [formMixin],
  components: {
    'poster': Poster
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
