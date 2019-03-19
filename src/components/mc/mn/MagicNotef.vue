<template>
 <div class="footer">
   <div class="foot">
   <p>
     Copyright © 2019 <a href="javascrpit:;">MojoCube</a>.
   </p>
   All rights reserved.
   </div>
   <label>2019年03月13日, 星期三</label>
 </div>
</template>

<script>
 export default {
   name:'magicFooter',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
  .footer{
    // position: absolute;
    // bottom:0px;
    background:#ffffff;
    height:55px;
    border-top:2px solid #d1d6db;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    .foot{
      display: flex;
      padding-left:17px;
      p{
      display: flex;
      font-weight: 600;
      a{
        color:#3c8dbc;
        font-weight: 600;
        margin-left:5px;
      }
    }
    }
    label{

      padding-right:18px;
    }

  }
</style>
