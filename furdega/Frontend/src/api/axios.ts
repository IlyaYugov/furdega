import axios from "axios"

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (401 === error.response?.status) {
      window.location.href = `/login?returnUrl=${window.location.href}`
    }

    return error
  }
)

axios.interceptors.request.use(function (config) {
  console.log(config.method)
  return config
})

export default axios
