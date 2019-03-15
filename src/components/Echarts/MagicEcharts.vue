<template>
 <div class="bigBox">
   <magic-echarts-header></magic-echarts-header>
   <magic-echarts-section></magic-echarts-section>
   <div class="f">
     <magic-common-footer></magic-common-footer>
   </div>
   <router-view></router-view>
 </div>
</template>
<script>
  import MagicEchartsHeader from './MagicEchartsHeader';
  import MagicEchartsSection from './MagicEchartsSection';
  import MagicCommonFooter from "../common/MagicCommonFooter";
  export default {
    name:'magicEchaters',
      data () {
      return {

      }
    },
    components: {
      MagicCommonFooter,
      MagicEchartsHeader,
      MagicEchartsSection
    }
  }
</script>

<style lang='scss' scoped>
.bigBox{
    flex:1;
    /*height:100%;*/
    position: relative;
    .f{
        width:100%;
        position: absolute;
        bottom:0;
    }
}

</style>
