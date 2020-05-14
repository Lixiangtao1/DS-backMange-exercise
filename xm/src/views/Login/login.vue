<template>
  <div class="login_container">
    <div class="login_box">
      <div class="titleImg">
        <img src="@/assets/logo.png" alt="" >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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