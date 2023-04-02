import { auth } from '@/utils/tcb'

export function login(data) {
  const { username, password } = data
  return new Promise((resolve, reject) => {
    auth
      .signInWithEmailAndPassword(username, password)
      .then((loginState) => {
        resolve({ data: loginState })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function getInfo() {
  return new Promise((resolve, reject) => {
    auth
      .getCurrenUser()
      .then((user) => {
        resolve({ data: user })
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function logout() {
  return auth.signOut()
}
