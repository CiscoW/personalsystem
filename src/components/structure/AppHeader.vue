<template>
  <div>
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    个人中心<i class="el-icon-arrow-down el-icon--right"></i>
  </span>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="item" command="home">首页</el-dropdown-item>
        <el-dropdown-item class="item" command="personalData">个人资料</el-dropdown-item>
        <el-dropdown-item class="item" command="changePassword">修改密码</el-dropdown-item>
        <el-dropdown-item class="item" command="logOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <ChangePassword ref="ChangePassword"></ChangePassword>

  </div>
</template>

<script>
  import ChangePassword from '../personalcenter/ChangePassword'

  export default {
    name: "AppHeader",
    components: {
      ChangePassword
    },

    methods: {
      handleCommand(command) {
        eval("this." + command + '()')
      },
      logOut() {
        sessionStorage.removeItem('user');
        this.$router.push('/login');
      },
      changePassword() {
        this.$refs.ChangePassword.open();
      },
      personalData() {
        this.$router.push('/personalData');
      },
      home() {
        this.$router.push('/');
      }

    }
  }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #FFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-dropdown-menu {
    background: #fff;
  }

  .item {
    background-color: #fff;
    text-align: center;
  }
</style>
