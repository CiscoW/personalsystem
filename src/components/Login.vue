<template>
  <div id="login">
    <h3 class="title">系统登录</h3>
    <el-input v-model="userName">
      <template slot="prepend">用户</template>
    </el-input>


    <el-input v-model="password" show-password>
      <template slot="prepend">密码</template>
    </el-input>
    <el-button type="primary" :loading="loading" size="medium" @click="login">{{showText}}</el-button>

  </div>
</template>

<script>
  /* 抽离出来 */
  // import JsEncrypt from 'jsencrypt'
  import rsaEncrypt from '../js/rsa_encrypt'
  import instance from '../js/axios_instance'


  export default {
    name: "Login",
    data() {
      return {
        userName: "",
        password: "",
        loading: false,
        showText: "登录"
      }
    },
    beforeCreate() {
      document.querySelector('*').setAttribute('style', 'background:#fff')
    },
    methods: {
      login() {
        this.loading = true;
        this.showText = "登录中";

        let rsaPassword = rsaEncrypt(this.password);
        instance.post('https://oqeupc4n.api.lncld.net/1.1/functions/loginCheck', {
          "user_name": this.userName,
          "rsa_password": rsaPassword
        }).then(
          res => {
            let success = res.data.result.success;
            if (success) {

              this.$message({
                message: "登录成功",
                type: 'success'
              });
              sessionStorage.setItem("user", this.userName);
              this.$router.push('/');

            } else {
              this.$message({
                message: "用户或密码错误",
                type: 'error'
              });
              this.loading = false;
              this.showText = "登录";
            }
          }
        );

      },

      // RSAEncrypt(password) {
      //   let jsEncrypt = new JsEncrypt();
      //   jsEncrypt.setPublicKey(`-----BEGIN PUBLIC KEY-----
      //                           MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0bjkBRfF23NbHWy9GeGO
      //                           dC0HxPulQQ59OuLhcZLpw8etcdz6CbmtWrP/r+0W0Ff4vOr70bd0jaocrCe1dHoL
      //                           K6+oK8Et4nEsBo/8wtv1ALNxpXJpBytkmrOo4S0OId2wSRukuqqH+m+KehxJmSen
      //                           zKK5YGZHmCwWaha2NLkhIDPZM7/Wek5k89U1qOiGCZwFsL4AkofeI+5g50P4ujD+
      //                           Or2lGa9vpwiBFG6PiiWjC+fu+p8CppofspzfUzJff+J0utQrVQp8157dyT7CklQm
      //                           kGpenF9WI0BeqTKoQWMxQN0FQORMQp4kDgHgBukbyY3Lp9OBV8C5Nhv0uEpgQ+/Y
      //                           DQIDAQAB
      //                           -----END PUBLIC KEY-----
      //                           `);
      //
      //   return jsEncrypt.encrypt(password);
      //
      // },

    }
  }
</script>

<style scoped>
  #login {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 120px auto;
    width: 360px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .el-input {
    margin-top: 20px;
  }

  .el-button {
    margin: 30px auto 20px 120px;
    width: 120px;
    text-align: center;

  }


</style>
