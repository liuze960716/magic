<template>
  <div class="bigBox">
     <magic-user-header></magic-user-header>
     <magic-user-center></magic-user-center>
     <magic-discuss-pager></magic-discuss-pager>
     <div class="f">
        <magic-common-footer></magic-common-footer>
     </div>
    <router-view></router-view>
   </div>
</template>

<script>
  import MagicUserHeader from './userJob/MagicHeader'
  import MagicUserCenter from './userJob/center'
  import MagicDiscussPager from '../MagicDiscuss/MagicDiscussPager'
  import MagicCommonFooter from '../common/MagicCommonFooter'
 export default {
   name:'MagicUserJob',
   data () {
     return {

     }
   },
   components: {
      MagicUserHeader,
     MagicUserCenter,
     MagicDiscussPager,
     MagicCommonFooter
   }
 }
</script>

<style lang='scss' scoped>
.bigBox{
  /*width:100%;*/
  /*height:100%;*/
  // width: 1280px;
      flex: 1;
  position: relative;
  .f{
    position: absolute;
    right:0px;
    bottom:0;
    width:100%;
  }
}

</style>
