<template>
  <div class="login_box">
    <div class="login_logo">
      <a href="http://oa.mojocube.com/" target="_blank">
        <img src="../assets/img/logo_index.png" alt="魔方OA试用版">
      </a>
    </div>

    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "MagicLogin"
    }
</script>

<style scoped>
  .login_box{
    width: 100%;
    height: 100%;
    background: url("../../static/img/login_bg.jpg")no-repeat;
    background-size: 1680px 750px;
  }
  input{
    outline: none;
  }
</style>
