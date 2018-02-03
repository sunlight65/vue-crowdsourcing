<template>
  <div class="container">
    <div class="logo">{{ $t("msg.email") }}</div>
    <div class="login-item">
      <form action="" method="post" class="form form-login">
        <div class="form-field">
          <label class="user" for="login-username"><span class="hidden">Username</span></label>
          <input id="login-username" type="text" class="form-input" v-bind:placeholder="$t('msg.email')" required>
        </div>
        <div class="form-field">
          <label class="lock" for="login-password"><span class="hidden">Password</span></label>
          <input id="login-password" type="password" class="form-input" v-bind:placeholder="$t('msg.password')" required>
        </div>
        <div class="form-field">
          <input type="submit" value="Log in">
        </div>
      </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background:rgba(58,63,68,0.5);
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
  width:450px;
  display: flex;
  flex-direction: column;
}

.logo{
  font-family: "museo-slab";
  font-size:20px;
  text-align: center;
  padding: 20px 20px 0;
  margin:0;
}

.login-item {
  color: #ffff;
  padding:25px 25px 0;
  margin: 20px 20px 0;
  border-radius: 3px;
}

input {
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
}

.user:before {
  content: '\f007';
  font: 14px fontawesome;
  color: #5b5b5b;
}

.lock:before {
  content: '\f023';
  font: 14px fontawesome;
  color: #5b5b5b;
}

.form input[type="password"], .form input[type="text"], .form input[type="submit"] {
  width: 100%;
}

.form-login label,
.form-login input[type="text"],
.form-login input[type="password"],
.form-login input[type="submit"] {
  border-radius: 0.025rem;
  padding: 0.1rem;
  color: #3A3F44;
}

.form-login label {
  background-color: #222222;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}

.form-login input[type="text"], .form-login input[type="password"] {
  background-color: #ffffff;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.form-login input[type="text"]:focus, .form-login input[type="text"]:hover, .form-login input[type="password"]:focus, .form-login input[type="password"]:hover {
  background-color: #eeeeee;
}
.form-login input[type="submit"] {
  background-color: #00B9BC;
  color: #eee;
  font-weight: bold;
  text-transform: uppercase;
}
.form-login input[type="submit"]:focus, .form-login input[type="submit"]:hover {
  background-color: #197071;
}
.form-field {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.2rem;
}

.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.text--center {
  text-align: center;
}
</style>
