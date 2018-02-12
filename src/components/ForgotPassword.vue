<template>
  <div class="container">
    <poster></poster>
    <div class="forgot-password-form">
      <div class="title">{{ $t("msg.forgot_password") }}</div>
      <form class="main-content" @submit.prevent="submitWrap">
        <div class="form-field">
          <label class="iconfont icon-user" for="email"><span class="hidden">{{ $t('msg.username') }}</span></label>
          <input name="email" type="text" class="form-input" :placeholder="$t('msg.email')" autofocus="autofocus">
        </div>
        <div class="form-field">
          <input type="submit" :value="lblSumbit($t('msg.resetting'), $t('msg.reset_password'))"
          class="btn primary" :disabled="isSubmitting" />
        </div>
        <router-link :to="{ path: '/sign_in' }" class="sign-in">{{ $t("msg.sign_in") }}</router-link>
        <router-link :to="{ path: '/sign_up' }" class="sign-up">{{ $t("msg.sign_up") }}</router-link>
      </form>
    </div>
</div>
</template>

<script>
import formMixin from '@/assets/js/formMixin'
import Poster from '@/components/Poster'

export default {
  name: 'ForgotPassword',
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

  @include if_mobile() {
    width: 100%;
  }
}

.forgot-password-form {
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
