'use strict'
const CloudBase = require('@cloudbase/manager-node')
const TcbRouter = require('tcb-router')

const app = CloudBase.init()

exports.main = async (event, context) => {
  const tcbRouter = new TcbRouter({ event })

  // 获取post信息
  tcbRouter.router('getUsers', async (ctx) => {
    const { Users } = await app.user.getEndUserList({
      limit: 20,
      offset: 0
    })
    ctx.body = Users
  })

  console.log('Hello World')
  console.log(event)
  console.log(event['non-exist'])
  console.log(context)

  return tcbRouter.serve()
}
