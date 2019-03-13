<template>
  <header class="main_header">
    <!--商标-->
    <a href="#" class="logo">
      <span class="logo_mini"><img src="../../assets/img/logo_1.png" alt=""></span>
      <span class="logo_lg"><img src="../../assets/img/logo.png" alt=""></span>
    </a>
    <!--右边的内容-->
    <nav class="navbar">
      <a href="#" class="sidebar_toggle"><img src="../../assets/img/pic_01.gif" alt=""></a>
      <div class="navbar_menu">
        <ul class="navbar_nav nav">
          <li>
            <a href="#" target="_blank"><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a>
          </li>
          <li>
            <a href="#" target="_blank"><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a></li>
          <li>
            <a href="#" target="_blank"><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a>
          </li>
          <li>
            <a href="#" target="_blank"><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a>
          </li>
          <li>
            <a href="#" target="_blank"><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a>
          </li>
          <li>
            <a href="#" target="_blank"><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a>
          </li>
          <li>
            <a href="#" target="_blank"><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a>
          </li>
          <li class="user_menu">
            <a href="#"><img class="user_image" src="../../assets/img/tx.jpg"><span>盖茨</span></a>
          </li>
          <li>
            <a href="#" ><img src="../../assets/img/pic_02.gif" alt="" class="qq_image"></a></li>
        </ul>
      </div>
    </nav>

  </header>
</template>

<script>
    export default {
        name: "MagicCommonHeader"
    }
</script>

<style scoped>
  .main_header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  .main_header .logo {
    display: block;
    width: 230px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    /*padding: 0 15px;*/
    float: left;
    font-weight: 300;
    overflow: hidden;
    background-color: #367fa9;
  }
  .logo_mini{
    display: none;
  }
  .logo_lg{
    display: block;
  }
  .navbar{
    background-color: #3c8dbc;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;
  }
  .navbar .sidebar_toggle {
    float: left;
    padding: 15px 15px;
  }
  .navbar_nav li{
    float: left;
  }
  .navbar_menu{
    float: right;
  }

  .navbar a:hover{
    background: rgba(0,0,0,0.1);
    color: #f6f6f6;;
  }
  .navbar .qq_image{
    width: 14px;
    height: 14px;
  }
  .nav>li>a {
    position: relative;
    display: block;
    padding: 15px 15px;
    line-height: 20px;
  }
  .user_image{
    float: left;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
  }
  .user_menu a span{
    color: #ffffff;
  }

</style>
