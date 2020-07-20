<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="login-card"  style="width: 850px">
      <div style="width: 500px;position: relative;right:-50px;margin-top: 40px;margin: auto;">
        <el-steps :active="active" finish-status="success">
          <el-step title="填写商品信息" style="position: relative;left: -35px"></el-step>
          <el-step title="填写商品促销" style="position: relative;left: -35px"></el-step>
          <el-step title="填写商品属性" style="position: relative;left: -35px"></el-step>
          <el-step title="填写商品关联" style="position: relative;left: -35px"></el-step>
        </el-steps>
        <el-form
                lable-position="right"
                label-width="90px"
        >
          <el-form-item label="商品分类：" prop="username" style="position: relative;margin-top: 60px;left: -77px">
            <el-input placeholder="请输入账号"/>
          </el-form-item>
          <el-form-item label="商品名称：" style="position: relative;left: -77px">
            <el-input placeholder="请输入密码"/>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
    data(){
      return {
          active: 0
      }
    },
    methods: {
        next() {
            if (this.active++ > 2) this.active = 0;
        }
    }

}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
  margin-top: 20px;
  /*position: relative;*/
  align-items: center;
}

.el-card {
  border: 1px solid #ebeef5;
  border-top-color: rgb(235, 238, 245);
  border-top-style: solid;
  border-top-width: 1px;
  border-right-color: rgb(235, 238, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-bottom-color: rgb(235, 238, 245);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(235, 238, 245);
  border-left-style: solid;
  border-left-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
}

.form-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 720px;
  padding: 35px 35px 15px;
  padding-top: 35px;
  padding-right: 35px;
  padding-bottom: 15px;
  padding-left: 35px;
  margin: 20px auto;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
}

.el-card__body {
  padding: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}

.login-card {
  width: 400px;
  margin: auto;
  transform: translateY(20%);
}

.login-btn {
  width: 100%;
}

.login-btn .el-button {
  width: 50%;
}

.logo {
  display: block;
  margin: 0 auto;
  transform: translateY(100%);
}
</style>
