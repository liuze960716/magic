<template>
  <div class="slimScrollDiv">
    <section class="side">
      <div class="user_panel">
        <div class="pull_left image">
          <img class="img_circle" src="../../assets/img/tx.jpg">
        </div>
        <div class="pull_left info">
          <p><span>盖茨</span></p>

          <a href="#" class="zai"><span class="dian"></span>在线</a>
        </div>
      </div>

      <div class="sidebar_form">
        <div class="input_group">
          <input type="text" class="form_control" placeholder="查找...">
          <span class="input_group_btn">
                    <a class="btn btn_flat" href="#">
                      <img src="../../assets/img/pic_03.gif">
                    </a>
                  </span>
        </div>
      </div>

      <el-row class="tac">

        <el-col :span="12">

          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#222d32" text-color="#fff" active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>

        </el-col>

      </el-row>

    </section>
  </div>
</template>

<script>
    export default {
      name: "MagicSectionLeft",
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .slimScrollDiv{
    overflow: hidden;
    background-color: #222d32;
  }
  .side{
    height: 700px;
    overflow: hidden;
  }
  .side a{
    color: #b8c7ce;
  }
  .user_panel{
    height:60px;
    margin-top:10px;
    padding: 10px;
  }
  .pull_left{
    float: left;
  }
  .user_panel>.image>img {
    width: 100%;
    max-width: 45px;
    height: auto;
  }
  .img_circle {
    border-radius: 50%;
  }
  .user_panel>.info {
    padding: 5px 5px 5px 15px;
    line-height: 1;
    position: absolute;
    left: 55px;
    color: #fff;
  }
  .user_panel>.info>a {
    text-decoration: none;
    padding-right: 5px;
    margin-top: 3px;
    font-size: 11px;
  }
  .user_panel>.info>p {
    font-weight: 600;
    margin-bottom: 9px;
  }
  .info .dian{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3c763d;
    margin-right: 3px;
    line-height: 10px;
  }
  .info .zai{
    color: #ffffff;
    line-height: 10px;
  }
  .sidebar_form {
    border-radius: 3px;
    border: 1px solid #374850;
    margin: 10px 10px;
    overflow: hidden;
    text-overflow: clip;
  }
  .input_group {
    position: relative;
    display: table;
    border-collapse: separate;
  }
  .sidebar_form input{
    color: #666;
    height: 35px;
    box-shadow: none;
    background-color: #374850;
    border: 1px solid transparent;
    transition: all .3s ease-in-out;
    border-top-left-radius: 2px 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: 5px;
    outline: none;
  }
  .input_group_btn {
    white-space: nowrap;
    vertical-align: middle;
  }
  .input_group .input_group_btn {
    display: table-cell;
  }
  .sidebar_form .btn {
    color: #999;
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0;
  }
  .btn {
    display: inline-block;
    padding: 9px 13px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #374850;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .el-submenu{
    width: 230px;
  }
  .el-submenu__title{
    background-color: rgb(34, 45, 50);
  }
</style>
