import cloudbase from '@cloudbase/js-sdk'

export const app = cloudbase.init({ env: 'pisces-9g1p5nk6fbf285fa' })

export const auth = app.auth({ persistence: 'local' })
