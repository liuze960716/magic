<template>
  <div class="box">
    <div class="popLogin">
      <div class="popModal">
        <!-- 图片 -->
        <div class="ad">
          <a href="" ><img src="static/img/43.jpg"></a>
        </div>
        <div class="login_submit">
          <div class="tabs">
            <form  action="" method="post">
              <ul class="tab_list">
                <li><a id="generallogin" href="">登录</a></li>
                <!--<li><a id="quicklogin" href="">短信快捷登录</a></li>-->
              </ul>
              <div id="login-1" class="login_item">
                <div class="p_ground">
                  <input type="text" name="login_name" class="ipt" placeholder="请输入用户名/手机号" onblur="">
                  <div class="tiptxt loginName">请输入用户名/手机号</div>
                </div>

                <div class="p_ground">
                  <input type="password" name="login_pwd"  class="ipt" placeholder="请输入密码">
                  <div class="tiptxt loginPwd" id="spanError">密码错误</div>
                </div>
                <router-link to="/">
                  <a id="loginButton" class="login_btn" onclick="" href="">
                    <input type="submit" class="denglu" id="btnLogin" value="登录">
                  </a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "MagicLogin"
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 750px;
    background: url(../../static/img/16.jpg) no-repeat;
    background-size:1535px;
  }
  input{
    outline: none;
  }
  a {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
    color: #000;
  }
  .popLogin {
    height: 490px;
    margin-left: -380px;
    margin-top: -210px;
    width: 650px;
    overflow: hidden;
    padding: 0;
    position: fixed;
    left: 50%;
    top: 50%;
  }
  .popModal{
    width: 650px;
    height: 490px;
    margin-top: 30px;
    overflow: hidden;
    background-color: white;
    position: relative;
    /*opacity: 0.8;*/
  }
  .popModal .ad img{
    display: block;
    float: left;
    width: 324px;
  }
  .login_submit{
    margin-left: 355px;
    background-color: white;
    /*opacity:.8;*/
  }

  .login_submit .tab_list li a{
    display: inline-block;
    height: 103px;
    color: #999;
    font-size: 16px;
    line-height: 103px;
    padding: 0 80px;
    border-top: 4px solid #c8a46d;
  }
  .login_submit .tab_list li {
    display: inline-block;
    padding-left: 36px;
  }
  .login_submit .login_item .ipt{
    width: 260px;
    height: 30px;
    font-size: 13px;
    border-bottom: 1px solid gray;
    border-top: 1px solid white;
    border-right: 1px solid white;
    border-left: 1px solid white;
    line-height: 30px;
    margin-bottom: 70px;
  }
  #popLogin .tiptxt, #popPassword .tiptxt, #popReg .tiptxt {
    display: none;
  }
  .login_submit .tiptxt{
    bottom: 0px;
    left: 0;
    margin-bottom: 0;
    margin-top: 10px;
    position: absolute;
    width: 100%;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt20 a{
    color: #999;
  }
  .login_submit .login_item .login_btn {
    display: block;
    width: 260px;
    height: 34px;
    color: #fff;
    line-height: 34px;
    margin: 40px 0 0;
    background-color: #bda47b;
    text-align: center;
    letter-spacing: 3px;
    font-size: 14px;
  }
  .login_submit .login_item .login_btn .denglu{
    color: white;
    background: #bda47b;
    border: 0;
  }
  .popbind .popModal:after {
    content: "";
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
  }

</style>
