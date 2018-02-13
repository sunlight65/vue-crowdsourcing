export default {
  data () {
    return {
      isSubmitting: false
    }
  },
  methods: {
    submitWrap (e, formRef) {
      const vm = this

      vm.$refs[formRef].validate((valid) => {
        if (valid) {
          vm.isSubmitting = true

          if (vm.submit) {
            const p = new Promise(
              function (resolve, reject) {
                vm.submit(e, function () {
                  resolve()
                }, function (status) {
                  reject(status)
                })
              }
            )

            p.then(function () {
              vm.isSubmitting = false
            }).catch(function (status) {
              vm.isSubmitting = false
            })
          }
        } else {
          console.log('valid fail!')
          return false
        }
      })
    },
    lblSumbit (lblSubmitting, lblDefault) {
      const vm = this
      return vm.isSubmitting ? lblSubmitting : lblDefault
    }
  }
}
