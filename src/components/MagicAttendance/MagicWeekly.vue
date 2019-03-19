<template>
 <div class="bigBox">
    <magic-weekly-header></magic-weekly-header>
    <magic-weekly-center></magic-weekly-center>
    <magic-discuss-pager></magic-discuss-pager>
   <div class="f">
      <magic-common-footer></magic-common-footer>
   </div>
 </div>
</template>
<script>
   import MagicWeeklyHeader from './weekly/MagicHeader'
   import MagicWeeklyCenter from './weekly/center'
   import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
   import MagicCommonFooter from '../common/MagicCommonFooter'
   export default {
     name:'MagicWeekly',
     data () {
       return {

       }
     },
   components: {
     MagicCommonFooter,
     MagicWeeklyHeader,
     MagicDiscussPager,
     MagicWeeklyCenter
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  // width:100%;
  flex:1;
  /*height:100%;*/
  position: relative;
  .f{
    position: absolute;
    right:0px;
    bottom:0;
    width:100%;
  }
}

</style>
