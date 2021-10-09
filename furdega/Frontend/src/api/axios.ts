import axios from "axios"

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (401 === error.response?.status) {
      if (window.location.href.includes("login")) {
        alert("Неверные логин или пароль")
      } else {
        alert(
          "Срок действия пароля истек или пароль не верен, вы будете перенаправлены на страницу логина"
        )
        localStorage.removeItem("accessToken")
        window.location.href = `/login?returnUrl=${window.location.href}`
      }
    }

    return error
  }
)

axios.interceptors.request.use(function (config) {
  if (config.method !== "get") {
    config.headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    }
  }
  return config
})

export default axios
