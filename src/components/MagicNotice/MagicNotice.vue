<template>
  <div class="bigBox">
      <magic-header></magic-header>
      <magic-notice-center></magic-notice-center>
      <magic-discuss-pager></magic-discuss-pager>
      <div class="f">
       <magic-common-footer></magic-common-footer>
      </div>
    <router-view></router-view>
   </div>
</template>

<script>
  import MagicHeader from './notice/MagicHeader'
  import MagicNoticeCenter from './notice/center'
  import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
  import MagicCommonFooter from '../common/MagicCommonFooter'
 export default {
   name:'MagicNotice',
   data () {
     return {

     }
   },
   components: {
     MagicHeader,
     MagicNoticeCenter,
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
