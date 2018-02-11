
import axios from 'axios'
import webStorage from '@/assets/js/webStorage'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

function getTk () {
  return webStorage.local.get(webStorage.local.KEY.tk)
}

export default {
  get: function (params) {
    let {url, data, onSuccess, onError, onFinally} = params
    const tk = getTk()
    const config = {}
    if (tk) {
      config.headers = { 'Authorization': tk }
    }
    if (data) {
      config.params = data
    }
    axios.get(url, config)
      .then(function (response) {
        if (onSuccess) {
          onSuccess(response)
        }
        if (onFinally) {
          onFinally()
        }
      })
      .catch(function (error) {
        const res = error.response
        if (res.status === 401) {
          window.location.href = '/#/sign_in'
        }
        if (onError) {
          onError(error)
        }
        if (onFinally) {
          onFinally()
        }
      })
  },
  post: function (params) {
    const {url, data, onSuccess, onError, onFinally} = params
    const tk = getTk()
    const config = {}
    if (tk) {
      config.headers = { 'Authorization': tk }
    }
    axios.post(url, data, config)
      .then(function (response) {
        onSuccess(response)
        onFinally()
      })
      .catch(function (error) {
        onError(error)
        onFinally()
      })
  }
}
