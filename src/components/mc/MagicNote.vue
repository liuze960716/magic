<template>
<div class="box">
  <div class="head">
    <h3>笔记管理</h3>
    <div class="head_right">
      <span class="iconfont icon-shouye"></span><span>首页</span> <span class="iconfont icon-ic_arrow_r"></span><span>笔记管理</span>
    </div>
  </div>
  <div class="content">
    <magic-content></magic-content>
  </div>

  <magic-footer></magic-footer>
</div>
</template>

<script>
import MagicContent from "@/components/mc/mn/MagicContent"
import magicFooter from "@/components/mc/mn/MagicNotef"


 export default {
   name:'MagicNote',
   data () {
     return {
     }
   },
   components: {MagicContent,magicFooter},
   mounted () {

   },
   methods: {

   }
 }
</script>

<style lang='scss' scoped>
.box{
  display: flex;
  flex:1;
  flex-direction: column;
  height: 100%;
  .head{
    height: 52px;
    // background:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 20px;
    h3{
      font-size:26px;
    }

  }
  .content{
    height: 100%;
    flex: 1;
    overflow-y:auto;
  }

}

</style>
