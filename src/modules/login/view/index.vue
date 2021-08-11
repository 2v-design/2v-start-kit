<template>
  <div class="login-page">
    <div class="bg"></div>
    <div class="login-form">
      <div class="title">{{ title }}</div>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="70px"
        label-position="left"
      >
        <el-form-item label="账号" prop="username">
          <el-input v-model.trim="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="info" @click="testLogin">Test Login</el-button>
        </el-form-item>
      </el-form>

      <div class="footer">Commit: {{ gitVersion.COMMIT }}</div>
    </div>
  </div>
</template>

<script>
  import { useAuthStore } from '../store'
  import { ElMessage } from 'element-plus'

  export default {
    components: {},
    data() {
      return {
        title: 'Login Demo',
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        rules: {
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
          username: [{ required: true, message: '请输入账号', trigger: 'blur' }]
        },

        token: '',

        loading: false,
        gitVersion: __GIT_VERSION__
      }
    },
    computed: {
      authStore() {
        return useAuthStore()
      }
    },

    mounted() {},
    methods: {
      inputChange() {},
      async login() {
        this.loading = true
        this.authStore
          .getAccessToken(this.loginForm)
          .then((res) => {
            const { accessToken } = res
            this.setAccessToken(accessToken)
            ElMessage({
              message: '登录成功',
              type: 'success'
            })
          })
          .finally(() => {
            this.loading = false
          })
      },
      submitForm() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.login()
          }
        })
      },

      testLogin() {
        this.setAccessToken('2333')
      },
      setAccessToken(accessToken) {
        this.loading = false
        localStorage.setItem('access_token', accessToken)
        location.reload()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-page {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000d9;

    .bg {
      width: 60%;
      height: 100%;
      background: url('../images/login_background.png') no-repeat;
      background-size: 100%;
      background-position: 0 250px;
    }

    .login-form {
      width: 40%;
      display: flex;
      flex-flow: column;
      // align-items: center;

      .title {
        width: 400px;
        font-size: 55px;
        font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 600;
        color: #ffffffb3;
      }

      .el-form {
        padding: 50px;
        width: 400px;
        height: 250px;
        margin-top: 50px;
        background: #424659;
        border-radius: 10px;
        box-sizing: border-box;
      }

      :deep(.el-form-item__label) {
        color: #fff;
      }
    }

    .footer {
      position: absolute;
      bottom: 3px;
      left: 5px;
      font-size: 12px;
      color: #fff;
    }
  }
</style>
