<template>
  <div class="header">
    <h3>在线用户</h3>
    <p>
      <span class="iconfont icon-shouye"></span>
      <span class="span1">首页</span>
      <span class="iconfont icon-ic_arrow_r"></span>
      <span class="span2">在线用户</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "MagicUserHeader"
    }
</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3{
      font-size:26px;
      color:#333333;
      padding-bottom:18px;
      margin-left:16px;
      font-weight: 100;
      padding-top:20px;
    }
    p{
      display: flex;
      color:#cecfcf;
      align-items: center;
      margin-right:18px;
      .iconfont{
        font-size: 16px;
        color:#444444;
        margin-top: 4px;
      }
      .icon-ic_arrow_r{
        color:#cecfcf;
      }
      .span1{
        font-size: 12px;
        color:#444444;
        margin:0 10px 0 9px;
      }
      .span2{
        font-size: 12px;
        color:#777777;
        margin-left:10px;
      }
    }
  }

</style>
