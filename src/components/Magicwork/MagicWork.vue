<template>
  <div class="bigBox">
    <magic-work-header></magic-work-header>
    <magic-work-center></magic-work-center>
    <div class="f">
      <!--<magic-work-footer></magic-work-footer>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MagicWorkHeader from './work/MagicWorkHeader'
  import MagicWorkCenter from './work/MagicWorkCenter'
  // import MagicWorkFooter from './work/MagicWorkFooter'
  export default {
   name:'MagicWork',
   data () {
     return {

     }
   },
   components: {
     MagicWorkHeader,
     MagicWorkCenter,
     // MagicWorkFooter
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  flex:1;
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
