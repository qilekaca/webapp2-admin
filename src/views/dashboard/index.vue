<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <button @click="Login">匿名登陆</button>
    <button @click="getUsers">云函数</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { callFunction } from '@/api/function'
import { auth } from '@/utils/tcb'

export default {
  name: 'Dashboard',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    Login() {
      auth
        .anonymousAuthProvider()
        .signIn()
        .then((res) => {
          // 登录成功
          console.log(res)
        })
        .catch((err) => {
          // 登录失败
          console.log(err)
        })
    },
    async getUsers() {
      const res = await callFunction('admin-users', 'getUsers')
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
