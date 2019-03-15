<template>
  <header class="main_header">
    <!--商标-->
    <router-link to="MagicSectionRight">
      <a href="#" class="logo">
        <span class="logo_mini"><img src="../../assets/img/logo_index.png" alt=""></span>
        <span class="logo_lg"><img src="../../assets/img/logo.png" alt=""></span>
      </a>
    </router-link>
    <!--右边的内容-->
    <nav class="navbar">
      <a href="#" class="sidebar_toggle" >
        <img src="../../assets/img/pic_01.gif" alt="">
      </a>
      <div class="navbar_menu">
        <ul class="navbar_nav nav">
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-qq"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-fl-gouwuche"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-quanqiu"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-xiazai16"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-lingsheng"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-email"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-renwu"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
          <li class="user_menu">
            <a href="#" target="_blank">
              <img class="user_image" src="../../assets/img/tx.jpg">
              <span>盖茨</span>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <span class="iconfont icon-lishijilu"></span>
              <!--<img src="../../assets/img/pic_02.gif" alt="" class="qq_image">-->
            </a>
          </li>
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
  /*@import "http://at.alicdn.com/t/font_1089298_3owjdcryhjt.css";*/
  .main_header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;
  }
  .main_header .logo {
    display: block;
    width: 233px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
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
  .navbar_menu{
    float: right;
  }
  .navbar_nav li{
    float: left;
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
  @media screen and (max-width: 945px) {
    .main_header{
      background-color: #3c8dbc;
    }
    .main_header .logo{
      width: 100%;
      height: 50px;
    }
    .logo_mini{
      display: block;
    }
    .logo_mini img{
      width: 140px;
      height: 34px;
    }
    .navbar{
      margin: 0;
      display: block;
      width: 100%;
      min-height: 50px;
      background-color: #3c8dbc;
    }

  }
</style>
