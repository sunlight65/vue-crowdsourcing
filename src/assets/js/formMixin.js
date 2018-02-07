export default {
  data () {
    return {
      isSubmitting: false
    }
  },
  methods: {
    submit () {
      const vm = this
      vm.isSubmitting = true
    },
    lblSumbit (lblSubmitting, lblDefault) {
      const vm = this
      return vm.isSubmitting ? lblSubmitting : lblDefault
    }
  }
}
