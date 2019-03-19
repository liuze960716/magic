<template>
 <div class="bigBox">
    <magic-attendance-header></magic-attendance-header>
    <magic-attendance-center></magic-attendance-center>
    <magic-discuss-pager></magic-discuss-pager>
   <div class="f">
      <magic-common-footer></magic-common-footer>
   </div>
 </div>
</template>
<script>
   import MagicAttendanceHeader from './attendance/MagicHeader'
   import MagicAttendanceCenter from './attendance/center'
   import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
   import MagicCommonFooter from '../common/MagicCommonFooter'
   export default {
     name:'MaginAttendance',
     data () {
       return {

       }
     },
   components: {
     MagicCommonFooter,
     MagicAttendanceHeader,
     MagicDiscussPager,
     MagicAttendanceCenter
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
