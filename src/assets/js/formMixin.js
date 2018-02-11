export default {
  data () {
    return {
      isSubmitting: false
    }
  },
  methods: {
    submitWrap (e) {
      const vm = this
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
    },
    lblSumbit (lblSubmitting, lblDefault) {
      const vm = this
      return vm.isSubmitting ? lblSubmitting : lblDefault
    }
  }
}
