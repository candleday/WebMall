<template>
  <div>
    <el-avatar :size="100" :src="circleUrl" class="logo"></el-avatar>
    <el-card class="login-card">
      <el-form
        ref="loginForm"
        :rules="rules"
        lable-position="right"
        :model="form"
        label-width="60px"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-s-goods"
            show-password
          />
        </el-form-item>
        <el-form-item prop="rem">
          <el-checkbox label="记住密码" v-model="form.rem" name="type" />
        </el-form-item>
        <el-button-group class="login-btn">
          <el-button type="primary" @click="btnLogin" :loading="isLoading"
            >登录</el-button
          >
          <el-button type="primary" @click="btnReset">重置</el-button>
        </el-button-group>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { api_login } from '../api/admin.js'

export default {
  data() {
    return {
      isLoading: false,
      form: {
        username: '',
        password: '',
        rem: false
      },
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',

      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在4到20个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 20, message: '长度在4到20个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    btnReset() {
      //1.获取表单对象
      // console.log(this.$refs.loginFormRef)
      //2.通过表单对象执行
      this.$refs.loginForm.resetFields()
    },

    btnLogin() {
      this.isLoading = true
      // 1.验证表单
      this.$refs['loginForm'].validate(async valid => {
        if (!valid) {
          console.log('验证失败！！')
          return false
        }

        // 2.提交表单
        const { data: res } = await api_login(
          this.form.username,
          this.form.password
        )
        console.log(res)
        this.isLoading = false
        if (res.code !== 200) {
          this.$message.error(res.message)
          return true
        }
        // 3.保存token到sessionStorage
        const data = res.data
        const token = data.tokenHead + data.token
        window.sessionStorage.setItem('token', token) //会话结束后自动删除
        // 4.保存用户信息到vue的store中
        // 5.记住密码功能，登录用户密码保存到cookies
        if (this.form.rem) {
          this.$cookies.set('username', this.form.username, '7D') //默认1天过期
          this.$cookies.set('password', this.form.password, '7D')
        } else {
          this.$cookies.remove('username')
          this.$cookies.remove('password')
        }
        // 6.登录页面刷新或重新加载的时候从cookies中获取
        // 7.跳转到主页面,编程式路由跳转
        this.$router.replace('/home')
      })
    }
  },
  created() {
    this.form.username = this.$cookies.get('username')
    console.log('用户名:' + this.$cookies.get('username'))
    this.form.password = this.$cookies.get('password')
    console.log('密码:' + this.$cookies.get('username'))
  }
}
</script>

<style scoped>
.login-card {
  width: 100%;
  margin: auto;
  transform: translateY(50%);
}

.login-btn {
  width: 100%;
}

</style>
