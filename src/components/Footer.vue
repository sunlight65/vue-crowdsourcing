<template>
  <div class="page-footer">
    <p class="copy-right">{{ $t("msg.copy_right") + ' © ' + year + ' ' + $t("msg.brand") }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.copy-right {
  text-align: center;
}
</style>
