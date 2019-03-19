<template>
    <div class="bigBox">
      <magic-header></magic-header>
      <magic-newly-center></magic-newly-center>
      <div class="f">
        <magic-common-footer></magic-common-footer>
      </div>
    <router-view></router-view>
    </div>
</template>

<script>
  import MagicHeader from './newly/MagicHeader'
  import MagicNewlyCenter from './newly/center'
  import MagicCommonFooter from '../common/MagicCommonFooter'
  export default {
   name:'MagicNewly',
   data () {
     return {

     }
   },
   components: {
     MagicHeader,
     MagicNewlyCenter,
     MagicCommonFooter
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  /*width:100%;*/
  /*height:100%;*/
  width: 1290px;
  position: relative;
  // overflow: hidden;
  .f{
    position: absolute;
    right:0;
    bottom:0;
    width:100%;
  }
}
</style>
