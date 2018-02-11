export default {
  local: {
    KEY: {
      tk: 'tk'
    },
    get: function (key) {
      return window.localStorage.getItem(key)
    },
    set: function (key, value) {
      if (key in this.KEY) {
        window.localStorage.setItem(key, value)
      } else {
        alert('web storage error: key is not declared')
      }
    },
    clear: function () {
      window.localStorage.clear()
    }
  }
}
