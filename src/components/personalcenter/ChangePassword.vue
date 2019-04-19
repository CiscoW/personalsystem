<template>
  <el-dialog :visible.sync="dialogVisible" :before-close="beforeClose" width="30%">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="原密码" prop="oldPassword">
        <el-input type="password" v-model="ruleForm.oldPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="doubleCheck">
        <el-input type="password" v-model="ruleForm.doubleCheck" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import rsaEncrypt from '../../js/rsa_encrypt'
  import instance from '../../js/axios_instance'

  export default {
    name: "ChangePassword",
    data() {
      let validateOldPassword = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入原密码'));
        }
        let userName = sessionStorage.getItem('user');
        instance.post('https://oqeupc4n.api.lncld.net/1.1/functions/loginCheck', {
          "user_name": userName,
          "rsa_password": rsaEncrypt(value)
        }).then(
          res => {
            let success = res.data.result.success;
            if (success) {
              callback();
            } else {
              callback(new Error('密码错误'));
            }
          })

      };

      let validateNewPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm.doubleCheck !== '') {
            this.$refs.ruleForm.validateField('doubleCheck');
          }
          callback();
        }
      };

      let validateDoubleCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {

        dialogVisible: false,
        ruleForm: {
          oldPassword: '',
          newPassword: '',
          doubleCheck: '',
        },
        rules: {
          oldPassword: [
            {required: true, validator: validateOldPassword, trigger: 'blur'}
          ],
          newPassword: [
            {required: true, validator: validateNewPassword, trigger: 'blur'}
          ],
          doubleCheck: [
            {required: true, validator: validateDoubleCheck, trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.ruleForm.oldPassword);
            this.dialogVisible = false;
            this.resetForm('ruleForm');
            //TODO 此处调用后端修改
            this.$message({
              message: "密码修改成功",
              type: 'success'
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      beforeClose() {
        this.resetForm('ruleForm');
        this.dialogVisible = false;
      },
      open() {
        this.dialogVisible = true;
      }
    }

  }
</script>

<style scoped>

</style>
