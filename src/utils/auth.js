// import Cookies from 'js-cookie'

const TokenKey = `access_token_${process.env.VUE_APP_ENV_ID}`

export function getToken() {
  return JSON.parse(localStorage.getItem(TokenKey))
}

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }
