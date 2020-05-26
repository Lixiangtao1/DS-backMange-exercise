<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="titleImg">
        <img src="@/assets/logo.png" alt="" >
      </div>
      <!-- 登录表单区域 -->
      <div class="login_form">
        <el-form ref="formData" :model="formData" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="formData.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    //登录    
    login() {

    },
    // 重置
    resetForm(formData) {
      this.$refs.formData.resetFields();
    }
  }
}
</script>
<style lang="less" scoped>
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
    .login_box{
      width: 400px;
      height: 300px;
      background-color: aliceblue;
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%); //居中
      .titleImg{
        width: 130px;
        height: 130px;
        border: 1px solid #ccc;
        border-radius: 50%;
        box-shadow: 0 0 10px #ddd;
        padding: 5%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        img{
          width:100%;
          height: 100%;
          border: 1px solid #eee;
          border-radius: 50%;
        }
      }
    }
  }
</style>