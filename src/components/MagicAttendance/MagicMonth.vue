<template>
 <div class="bigBox">
    <magic-month-header></magic-month-header>
    <magic-month-center></magic-month-center>
    <magic-discuss-pager></magic-discuss-pager>
   <div class="f">
      <magic-common-footer></magic-common-footer>
   </div>
 </div>
</template>
<script>
   import MagicMonthHeader from './month/MagicHeader'
   import MagicMonthCenter from './month/center'
   import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
   import MagicCommonFooter from '../common/MagicCommonFooter'
   export default {
     name:'MagicMonth',
     data () {
       return {

       }
     },
   components: {
     MagicCommonFooter,
     MagicMonthHeader,
     MagicDiscussPager,
     MagicMonthCenter
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
    right:0;
    bottom:0;
    width:100%;
  }
}

</style>
