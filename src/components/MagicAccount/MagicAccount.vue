<template>
  <div class="bigBox">
    <magic-system-header></magic-system-header>
    <magic-discuss-center></magic-discuss-center>
    <magic-discuss-pager></magic-discuss-pager>
    <div class="f">
      <magic-common-footer></magic-common-footer>
    </div>

  </div>
</template>

<script>
  import MagicSystemHeader from './Account/MagicSystemHeader'
  import MagicDiscussCenter from './account/center'
  import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
  import MagicCommonFooter from '../common/MagicCommonFooter'
  export default {
    name:'MagicAccount',
    data () {
      return {

      }
    },
    components: {
      MagicSystemHeader,
      MagicDiscussCenter,
      MagicDiscussPager,
      MagicCommonFooter
    }
  }
</script>

<style lang='scss' scoped>
  .bigBox{
    /*width:100%;*/
    /*height:100%;*/
    position: relative;
    .f{
      position: absolute;
      right:0;
      bottom:0;
      width:100%;
    }
  }
</style>
