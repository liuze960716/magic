<template>
   <div class="bigBox">
     <magic-header></magic-header>
     <magic-gather-center></magic-gather-center>
     <magic-discuss-pager></magic-discuss-pager>
     <div class="f">
       <magic-common-footer></magic-common-footer>
     </div>
     <router-view></router-view>
   </div>
</template>
<script>
  import MagicHeader from './gather/MagicHeader'
  import MagicGatherCenter from './gather/center'
  import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
  import MagicCommonFooter from '../common/MagicCommonFooter'
  export default {
   name:'MagicGather',
   data () {
     return {

     }
   },
   components: {
     MagicHeader,
     MagicGatherCenter,
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
