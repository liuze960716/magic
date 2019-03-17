<template>
 <div class="bigBox">
   <magic-common-header></magic-common-header>
   <magic-gather-center></magic-gather-center>
   <magic-discuss-pager></magic-discuss-pager>
   <div class="f">
     <magic-common-footer></magic-common-footer>
   </div>

 </div>
</template>
<script>
  import MagicCommonHeader from '../common/MagicCommonHeader'
  import MagicGatherCenter from './gather/center'
  import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
  import MagicCommonFooter from '../common/MagicCommonFooter'
  export default {
   name:'MaginDiscussDiscuss',
   data () {
     return {

     }
   },
   components: {
     MagicCommonHeader,
     MagicGatherCenter,
     MagicDiscussPager,
     MagicCommonFooter
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
