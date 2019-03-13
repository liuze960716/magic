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
        <div class="col-lg-3 col-xs-6">
          <!-- 考勤 -->
          <div class="small_box bg_aqua">
            <div class="inner"><h3>未签到</h3><p>请到考勤管理签到</p></div>
            <div class="icon">
              <img src="" alt="">
            </div>
            <a href="#" class="small_box_footer">更多 <img src="" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MagicSectionRight"
    }
</script>

<style scoped>
  .content_wrapper{
    background: #ecf0f5;
    flex:1;
    height: 700px;
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
  /*@media (min-width: 1200px)*/
    /*.col-lg-3 {*/
      /*width: 25%;*/
    /*}*/
  .col-lg-3{
    float: left;
  }
  .col-xs-6{
    width: 25%;
  }
  .small_box {
    border-radius: 2px;
    position: relative;
    display: block;
    margin-bottom: 20px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }
  .bg_aqua{
    background-color: #00c0ef;
  }
  .small_box>.inner {
    padding: 10px;
  }
  .small_box h3 {
    font-size: 38px;
    font-weight: bold;
    margin: 0 0 10px 0;
    white-space: nowrap;
  }
  .small_box p {
    font-size: 15px;
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
</style>
