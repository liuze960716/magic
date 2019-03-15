<template>
 <div class="bigBox">
    <magic-discuss-header></magic-discuss-header>
    <magic-discuss-center></magic-discuss-center>
    <magic-discuss-pager></magic-discuss-pager>
   <div class="f">
      <magic-common-footer></magic-common-footer>
   </div>
 </div>
</template>
<script>
   import MagicDiscussHeader from './MagicDiscussHeader'
   import MagicDiscussCenter from './MagicDiscussCenter'
   import MagicDiscussPager from './MagicDiscussPager'
   import MagicCommonFooter from "../common/MagicCommonFooter";
   export default {
     name:'MaginDiscussSection',
     data () {
       return {

       }
     },
   components: {
     MagicCommonFooter,
     MagicDiscussHeader,
     MagicDiscussPager,
     MagicDiscussCenter
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  width:100%;
  height:100%;
  position: relative;
  .f{
    position: absolute;
    right:0px;
    bottom:0;
    width:100%;
  }
}

</style>
