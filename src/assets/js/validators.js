export default {
  required: (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (this.ruleForm2.checkPass !== '') {
        this.$refs.ruleForm2.validateField('checkPass')
      }
      callback()
    }
  }
}
