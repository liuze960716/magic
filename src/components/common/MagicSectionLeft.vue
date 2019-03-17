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

          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#222d32"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!--系统管理-->
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont icon-xitongguanli-"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="MagicSystemType">
                  <el-menu-item index="1-1">菜单管理</el-menu-item>
                </router-link>
                <router-link to="MagicSystemType">
                  <el-menu-item index="1-2">类型管理</el-menu-item>
                </router-link>
                <router-link to="MagicSystemType">
                <el-menu-item index="1-3">状态管理</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!--角色管理-->
            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont icon-jiaoseguanli"></i>
                <span>角色管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">角色列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--用户管理-->
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont icon-1"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">部门管理</el-menu-item>
                <el-menu-item index="1-2">职位管理</el-menu-item>
                <el-menu-item index="1-3">用户管理</el-menu-item>
                <el-menu-item index="1-3">在线用户</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--考勤管理-->
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont icon-kaoqinbaogao"></i>
                <span>考勤管理</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">考勤管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--流程管理-->
            <el-submenu index="5">
              <template slot="title">
                <i class="iconfont icon-xitongguanli-"></i>
                <span>流程管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="MagicEchaters">
                  <el-menu-item index="1-1">用户数据</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!--数据管理-->
            <el-submenu index="6">
              <template slot="title">
                <i class="iconfont icon-xitongguanli-"></i>
                <span>数据管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="MagicAlbum">
                  <el-menu-item index="1-1">旋转幻灯片</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!--邮件管理-->
            <el-submenu index="7">
              <template slot="title">
                <i class="iconfont icon-email"></i>
                <span>邮件管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="MagicAccount">
                  <el-menu-item index="1-1">账号管理</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!--公告通知-->
            <el-submenu index="8">
              <template slot="title">
                <i class="iconfont icon-renwu"></i>
                <span>公告通知</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">通知管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--日程管理-->
            <el-submenu index="9">
              <template slot="title">
                <i class="iconfont icon-xitongguanli-"></i>
                <span>日程管理</span>
              </template>

              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--工作计划-->
            <el-submenu index="10">
              <template slot="title">
                <i class="iconfont icon-xitongguanli-"></i>
                <span>工作计划</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!--财务管理-->
            <el-submenu index="11">
              <template slot="title">
                <i class="iconfont icon-caiwuguanli"></i>
                <span>财务管理</span>
              </template>
              <el-menu-item-group>
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
    width: 233px;
    overflow: hidden;
    background-color: #222d32;
  }
  .side{
    height: 100%;
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
    margin: 9px 12px;
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
    outline: none;
    padding: 7px 0px;
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
    padding: 8px 14px;
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
  .el-submenu:hover{
    color: #fff;
    background: #1e282c;
    border-left-color: #3c8dbc;
  }
  .el-submenu__title{
    background-color: rgb(34, 45, 50);
  }
  .el-menu-item{
    text-align: center;
  }
  @media screen and (max-width: 945px){
    .slimScrollDiv{
      display: none;
    }
  }
  .iconfont{
    padding-left: 5px;
    margin-right: 10px;
  }
</style>
