<template>
  <div>

    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>


    <el-form :label-position="labelPosition" label-width="80px" :model="formData">
      <el-form-item label="账号">
        <el-input v-model="formData.account" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name" :disabled="formData.nameDisabled"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="formData.department" :disabled="formData.departmentDisabled"></el-input>
      </el-form-item>
      <el-form-item label="职务">
        <el-input v-model="formData.position" :disabled="formData.positionDisabled"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="savePersonalData" :disabled="saveDisabled">保存</el-button>
        <el-button type="primary" @click="changePersonalData" :disabled="changeDisabled">修改</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>

<script>
  export default {
    name: "PersonalData",
    data() {
      return {
        imageUrl: '../../static/img/1.png',
        labelPosition: 'left',
        formData: {
          account: 'admin',
          name: '超级用户',
          nameDisabled: true,
          department: '嘿嘿嘿',
          departmentDisabled: true,
          position: '嘿嘿嘿',
          positionDisabled: true,
        },
        saveDisabled: true,
        changeDisabled: false
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

      changePersonalData() {
        this.formData.nameDisabled = false;
        this.formData.departmentDisabled = false;
        this.formData.positionDisabled = false;
        this.saveDisabled = false;
      },

      savePersonalData(){
        this.formData.nameDisabled = true;
        this.formData.departmentDisabled = true;
        this.formData.positionDisabled = true;
        this.saveDisabled = true;

      }


    },


  }
</script>

<style scoped>

  .avatar-uploader {
    width: 178px;
    margin: 0 auto;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    float: left;
  }

  .avatar-uploader:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-form {
    width: 500px;
    margin-left: 20px;
    padding: 10px;
    display: inline-block;

  }


</style>
