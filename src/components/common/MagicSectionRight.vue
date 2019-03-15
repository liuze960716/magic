<template>
    <div class="content_wrapper">
      <div class="content_header">
        <h1>
          控制面板
          <a href=""><img src="../../assets/img/blue.png"></a>
          <a href=""><img src="../../assets/img/green.png"></a>
          <a href=""><img src="../../assets/img/red.png"></a>
          <a href=""><img src="../../assets/img/yellow.png"></a>
          <a href=""><img src="../../assets/img/purple.png"></a>
        </h1>
        <ul class="breadcrumb">
          <li><img class="breadcrumb_01" src="../../assets/img/pic_06.gif" alt="">首页</li>
          <li><img class="breadcrumb_02" src="../../assets/img/pic_07.gif" alt="">控制面板</li>
        </ul>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-xs-6 col_one">
            <!-- 考勤 -->
            <div class="small_box bg_aqua">
              <div class="inner"><h3>未签到</h3><p>请到考勤管理签到</p></div>
              <div class="icon">
                <img src="" alt="">
              </div>
              <a href="#" class="small_box_footer">更多 <img src="" alt=""></a>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6 ">
            <!-- 通讯录 -->
            <div class="small_box col_two">
              <div class="inner"><h3>1</h3><p>通讯录</p></div>
              <div class="icon">
                <img src="" alt="">
              </div>
              <a href="#" class="small_box_footer">更多 <img src="" alt=""></a>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6 ">
            <!-- 文件管理 -->
            <div class="small_box col_three">
              <div class="inner"><h3>3</h3><p>文件管理</p></div>
              <div class="icon">
                <img src="" alt="">
              </div>
              <a href="#" class="small_box_footer">更多 <img src="" alt=""></a>
            </div>
          </div>
          <div class="col-lg-3 col-xs-6 ">
            <!-- 讨论区 -->
            <div class="small_box col_fore">
              <div class="inner"><h3>2</h3><p>讨论区</p></div>
              <div class="icon">
                <img src="" alt="">
              </div>
              <a href="#" class="small_box_footer">更多 <img src="" alt=""></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="connectedSortable col-lg-7">
            <div class="box">
              <div class="box_header" style="cursor: move;">
                <h3 class="box_title">本周系统使用统计</h3>
                <div class="pull_right box_tools">
                  <div class="btn_group">
                    <button class="btn"><i class="fa fa-minus">-</i></button>
                    <button class="btn"><i class="fa fa-times">-</i></button>
                    <button class="btn"><i class="fa fa-bars">-</i></button>
                  </div>
                </div>
              </div>
              <div class="box_body">

              </div>
            </div>
            <div></div>
          </div>
          <div class="connectedSortable col-lg-5">
            <div class="box collapsed_box">
              <div class="box_header" style="cursor: move;">
                <h3 class="box_title">任务完成排行</h3>
                <div class="pull_right box_tools">
                  <div class="btn_group">
                    <button class="btn"><i class="fa fa-plus">-</i></button>
                    <button class="btn"><i class="fa fa-times">-</i></button>
                    <button class="btn"><i class="fa fa-bars">-</i></button>
                  </div>

                </div>
              </div>
              <div class="box_body">

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="foot">
          <p>
            Copyright © 2019 <a href="#">MojoCube</a>.
          </p>
          All rights reserved.
        </div>
        <label>2019年03月13日, 星期三</label>
      </div>
    </div>
</template>

<script>
    // import MagicCommonFooter from "./MagicCommonFooter";
    export default {
      name: "MagicSectionRight",
      components: {
        // MagicCommonFooter,
      },
    }
</script>

<style lang='scss' scoped>
  .content_wrapper{
    background: #ecf0f5;
    flex:1;
    height: 100%;
  }
  .content_header{
    position: relative;
    padding: 15px 15px 0 15px;
  }
  .content_header>h1{
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }
  .content_header h1 a{
    margin: 0 5px;
  }
  .content_header h1 a img{
    width: 22px;
    height: 22px;
    margin-top: -5px;
  }
  .content_header .breadcrumb{
    float: right;
    background: transparent;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 12px;
    padding: 7px 5px;
    position: absolute;
    top: 15px;
    right: 10px;
    border-radius: 2px;
  }
  .breadcrumb>li {
    display: inline-block;
  }
  .content_header>.breadcrumb>li>a {
    color: #444;
    text-decoration: none;
    display: inline-block;
  }
  .breadcrumb .breadcrumb_01{
    width: 13px;
    height: 10px;
    margin-right: 5px;
  }
  .breadcrumb .breadcrumb_02{
    width: 8px;
    height: 7px;
    margin-right: 6px;
    margin-left: 7px;
  }
  .content {
    min-height: 250px;
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
    clear: both;
  }
  @media (min-width: 1200px){
    .col-xs-6{
      width: 25%;
    }
  }
  .col-lg-3{
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col_one{
    float: left;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .bg_aqua{
    background-color: #00c0ef;
  }
  .col_two{
    background-color: #00a65a;
  }
  .col_three{
    background-color: #f39c12;
  }
  .col_fore{
    background-color: #dd4b39;
  }
  .small_box {
    border-radius: 2px;
    position: relative;
    display: block;
    margin-bottom: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  .small_box>.inner {
    padding: 10px;
  }
  .small_box h3 {
    font-size: 38px;
    font-weight: bold;
    margin: 0 0 10px 0;
    white-space: nowrap;
    color: #ffffff;
  }
  .small_box p {
    font-size: 15px;
    color: #ffffff;
  }
  .small_box>.small_box_footer {
    position: relative;
    text-align: center;
    padding: 3px 0;
    color: #fff;
    color: rgba(255,255,255,0.8);
    display: block;
    z-index: 10;
    background: rgba(0,0,0,0.1);
    text-decoration: none;
  }
  .connectedSortable{
    min-width: 100px;
    margin-left: 15px;
    margin-right: 15px;
  }

  /*@media (max-width: 945px){*/
    /*.col-lg-7 {*/
      /*width: 100%;*/
      /*margin-left: 15px;*/
      /*margin-right: 15px;*/
    /*}*/
  /*}*/
  .box {
    position: relative;
    border-radius: 3px;
    background: #ffffff;
    border-top: 3px solid #d2d6de;
    margin-bottom: 20px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  .box_header {
    color: #444;
    display: block;
    padding: 10px;
    position: relative;
  }
  .box_header .box_title{
    display: inline-block;
    font-size: 18px;
    margin: 0;
    line-height: 1;
    font-weight: 400;
   }
  .box_header>.box_tools {
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .pull_right {
     float: right;
   }
  .btn_group{
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
  .btn {
    background-color: #3c8dbc;
    display: inline-block;
    padding: 6px 13px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid transparent;
    cursor: pointer;
    outline: none;
  }
  .box_body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 10px;
    text-align: center;
    border-top: solid 1px #eee;
    overflow: auto;
    height: 300px;
  }
  @media screen and (max-width: 945px){
    .content_header h1{
      width: 100%;
    }
    .breadcrumb{

    }
    .col-xs-6{
      width: 50%;
    }
    .col_one{
      padding-left: 15px;
    }
  }
  @media (max-width: 1400px){
    .col-xs-6{
      width: 50%;
    }
    .col_one{
      padding-left: 15px;
    }
  }
  @media (min-width: 1200px){
    .col-lg-7 {
      width: 58%;
      float: left;
      padding-right: 15px;
    }
    .col-lg-5 {
      width: 37%;
      float: left;
      position: relative;
      padding-right: 15px;
    }
  }
  @media (max-width: 1400px){
    .col-lg-7 {
      width: 100%;
      padding-right: 30px;
    }
    .col-lg-5 {
      width: 100%;
      padding-right: 30px;
    }
  }



  .footer{
  // position: absolute;
  // bottom:0px;
    background:#ffffff;
    height:55px;
    border-top:2px solid #d1d6db;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
  .foot{
    display: flex;
    padding-left:17px;
  p{
    display: flex;
    font-weight: 600;
  a{
    color:#3c8dbc;
    font-weight: 600;
    margin-left:5px;
  }
  }
  }
  label{
    padding-right:18px;
  }

  }
</style>
