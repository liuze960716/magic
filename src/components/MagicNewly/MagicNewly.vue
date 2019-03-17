<template>
<div class="bigBox">
  <magic-common-header></magic-common-header>
   <newly-center></newly-center>
   <div class="f">
     <magic-common-footer></magic-common-footer>
   </div>

 </div>
</template>

<script>
  import MagicCommonHeader from '../common/MagicCommonHeader'
  import newlyCenter from './newly/center'
  import MagicCommonFooter from '../common/MagicCommonFooter'
  export default {
   name:'MagicNewly',
   data () {
     return {

     }
   },
   components: {
     MagicCommonHeader,
     newlyCenter,
     MagicCommonFooter
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  width:100%;
  height:100%;
  position: relative;
  // overflow: hidden;
  .f{
    position: absolute;
    right:0px;
    bottom:0;
    width:100%;
  }
}


</style>
