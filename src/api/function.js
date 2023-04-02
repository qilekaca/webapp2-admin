import { app } from '../utils/tcb'

export function callFunction(name, $url, params) {
  return new Promise((resolve, reject) => {
    app
      .callFunction({
        name,
        data: { $url, ...params }
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
