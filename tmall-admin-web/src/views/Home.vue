<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-aside :width="!menuCollapse ? '200px' : '64px'">
        <!--        菜单栏-->
        <!-- router属性：是否激活菜单index作为路由跳转路径，default-active属性：当前激活菜单的index-->
        <el-menu
          :default-active="activeMenu"
          router
          :collapse="menuCollapse"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#9fcdb9"
          active-text-color="#409eff"
        >
          <el-menu-item index="/welcome">首页</el-menu-item>
          <!--          一级子菜单-->
          <el-submenu
            :index="formatPath(null, item.name)"
            v-for="item in firstMenus"
            :key="item.id"
          >
            <!--            二级子菜单标题-->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item
              class="menu-second"
              :index="formatPath(item.name, subItem.name)"
              v-for="subItem in secondMenus(item.id)"
              :key="subItem.id"
              >{{ subItem.title }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button
            :icon="!menuCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
            @click="menuCollapse = !menuCollapse"
          />
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar :src="loginUser.icon"></el-avatar>
              欢迎：{{ loginUser.username }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="change">修改密码</el-dropdown-item>
              <el-dropdown-item command="quite">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { api_logout, api_info } from '../api/admin.js'
export default {
  data() {
    return {
      menuCollapse: false,
      activeMenu: '',
      loginUser: {
        username: '',
        icon:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      },
      menus: []
    }
  },
  filter: {},

  computed: {
    firstMenus() {
      return this.menus.filter(item => item.parentId === 0)
    },
    secondMenus() {
      return parentId => this.menus.filter(item => item.parentId === parentId)
    }
  },
  mounted() {
    this.activeMenu = window.sessionStorage.getItem('activeMenu')
    if (!this.activeMenu) {
      this.activeMenu = '/welcome'
    }
    this.getInfo()
  },
  watch: {
    $route(to) {
      // console.log(to.path)
      this.selectMenu(to.path)
    }
  },
  methods: {
    formatPath(folder, name) {
      name = '/' + name
      // console.log(name + folder)
      if (folder) {
        name = '/' + folder + name
        // console.log(name)
      }

      return name
    },
    async getInfo() {
      const { data: res } = await api_info()

      if (res) {
        this.loginUser.icon = res.data.icon
        this.loginUser.username = res.data.username
        this.menus = res.data.menus
      }
    },
    selectMenu(index) {
      // console.log(index)
      this.activeMenu = index
      window.sessionStorage.setItem('activeMenu', index)
    },
    handleCommand(command) {
      console.log(command)
      if (command === 'quite') {
        this.handleLogout()
      }
    },
    async handleLogout() {
      const { data: res } = await api_logout()
      if (res.code != 200) {
        //退出失败
        this.$message.error(res.message)
        return
      }
      // 退出失败
      // 清除session
      window.sessionStorage.clear()
      //跳转到登录页面
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.menu-second {
  background-color: #1f2d3d !important;
}

.menu-second:hover {
  background-color: #001528 !important;
}

.el-header {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #d3dce6 solid 1px;
}

.el-avatar {
  position: relative;
  top: 12px;
}

.el-aside {
  background-color: #304156;
  text-align: center;
  line-height: 200px;
}

.el-menu {
  border: none;
}

.el-menu > .el-menu-item,
.el-submenu > .el-submenu__title {
  text-align: left;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
