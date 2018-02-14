export default {
  beforeCreate: function () {
    const vm = this
    this.validators = {
      equalTo: (rule, value, callback) => {
        if (rule.compareTo && value && value === vm.formData[rule.compareTo]) {
          callback()
        } else {
          callback(new Error(vm.$t('msg.equal_to', [vm.$t('txt.password')])))
        }
      }
    }
  }
}
