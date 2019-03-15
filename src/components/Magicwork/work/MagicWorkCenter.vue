<template>
 <div class="center">
  <table>
    <tr class="tr1">
      <a href="javascript:;"><span class="iconfont icon-jiahao"></span>新增</a>
      <p><input type="text" placeholder="查找..."/><span class="iconfont icon-fangdajing"></span></p>
    </tr>
    <tr>
      <td class="td1" width="260px">编号</td>
      <td width="64px">程度</td>
      <td width="150px">标题</td>
      <td width="180px">当前节点</td>
      <td width="180px">发起时间</td>
      <td width="180px">到期时间</td>
      <td width="80px">状态</td>
      <td width='228px'>操作</td>
    </tr>
    <tr>
      <td width="260px">2019030900334244726416</td>
      <td width="64px" class="spanTd">一般</td>
      <td width="150px">公司文件传阅</td>
      <td width="180px">已完结</td>
      <td width="180px">2019/3/9 0:33:42</td>
      <td width="180px">2019/3/16 0:33:00</td>
      <td width="80px"><span class="liSpan">已通过</span></td>
      <td width='228px'>

          <a href="javascript:;">
          <span class="iconfont icon-fangdajing"></span>
          查看
          </a>
      </td>
    </tr>
  </table>
 </div>
</template>

<script>
 export default {
   name:'workCenter',
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='scss' scoped>
.center{
  padding-left:17px;
  padding-right:17px;
  table{
    display: block;
    background:white;
    width:100%;
    border-top:3px solid #d2d6de;
    padding-left:10px;
    .tr1{
      border-bottom:1px solid #f8f8f8;
      height:45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a{
        background:#00a65a;
        width:65px;
        height:28px;
        color:white;
        display: flex;
        border-radius: 4px;
        align-items: center;
        span{
          font-size: 20px;
          font-weight: 600;
          margin-top: 4px;
          margin-left: 3px;
        }
      }
      p{
        display: flex;
        margin-right:16px;
        input{
          display: block;
          width:126px;
          height:30px;
          border:2px solid #e4e6eb;
          text-indent: 16px;
        }
        ::-webkit-input-placeholder{
          color:#9d9d9d;
        }
        .icon-fangdajing{
          width:31px;
          height:30px;
          background:#f4f4f4;
          font-size: 16px;
          line-height: 30px;
          text-align: center;
          border:2px solid #e4e6eb;
          border-left:none;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
    tr{
      display: flex;
      height:36px;
      border-bottom:1px solid #f6f6f6;
      align-items: center;
      td{
        display: flex;
      }
      .weight{
        padding-right:75px;
      }
      .td1{
        display: flex;
        align-items: center;
        font-weight: 600;
        span{
          font-size: 16px;
          margin-top:5px;
        }
      }
      .liSpan{
        background:#00a65a;
        font-size: 12px;
        color:#fff;
        width:50px;
        height:23px;
        border-radius: 4px;
        line-height: 23px;
        text-align: center;
      }
      td:nth-child(9){
        span{
          width:36px;
          height:23px;
          background:#00c0ef;
          font-size: 12px;
          color:#fff;
          line-height: 23px;
          text-align: center;
          border-radius: 4px;
        }
      }
      td:last-child{
        display: flex;
        a{
          width:60px;
          height:25px;
          background:#3c8dbc;
          border-radius: 4px;
          color:white;
          display: flex;
          align-items: center;
          margin-left:5px;
          font-size: 12px;
          span{
            font-size: 16px;
            color:white;
            margin-top:5px;
            margin-left:4px;
            margin-right:4px;
          }
        }
        a:last-child{

          span{
            font-size: 20px;
            font-weight: 600;
            margin-top:5px;
          }
        }
      }
      .spanTd{
        color:#00a65a;
      }
    }
  }
}

</style>
