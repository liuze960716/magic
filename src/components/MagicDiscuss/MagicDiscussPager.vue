<template>
<div class="pager">
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 15, 20, 25]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="2">
    </el-pagination>
  </div>
</div>
</template>
<script>
  export default {
    name:'magicPager',
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>

<style lang='scss' scoped>
.pager{
  margin-left:17px;
  margin-right:8px;
  background:#fafafa;
  height:50px;
  border-bottom:1px solid #dce0e4;
  display: flex;
  align-items: center;
  .block{
    margin:0 auto;
  }
}
</style>
