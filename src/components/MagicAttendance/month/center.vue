<template>
 <div class="center">
  <table>
    <tr class="tr1">
      <p>
        <a href="javascript:;" style="background:#3c8dbc"><span class="iconfont icon-dayin1"></span>打印</a>
        <a href="javascript:;" style="background:gray"><span class="iconfont icon-zuo"></span>上一月</a>
        <a href="javascript:;" style="background:gray"><span class="iconfont icon-ic_arrow_r"></span>下一月</a>
        <label>2019年03月</label>
      </p>
      <p><input type="text" placeholder="查找..."/><span class="iconfont icon-fangdajing"></span></p>
    </tr>
    <tr>
      <th width="60px">部门</th>
      <th width="54px">成员</th>
      <th width="120px">上班</th>
      <th width="120px">下班</th>
      <th width="120px">外出</th>
      <th width="120px">请假</th>
      <th width="120px">加班</th>
      <th width="120px">正常</th>
      <th width="120px">迟到</th>
      <th width="120px">早退</th>
      <th width="120px">旷工</th>
    </tr>
    <tr>
      <td width="60px">总公司</td>
      <td width="54px">李四</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
    </tr>
    <tr>
      <td width="60px">总公司</td>
      <td width="54px">张三</td>
      <td width="120px">-</td>
      <td width="120px">1</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">1</td>
    </tr>
    <tr>
      <td width="60px">总公司</td>
      <td width="54px">王五</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">1</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">-</td>
      <td width="120px">1</td>
      <td width="120px">-</td>
    </tr>
  </table>
 </div>
</template>

<script>
 export default {
   name:'MagicMonthCenter',
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
      p{
        display: flex;
        align-items: center;
         a{
        background:#00a65a;
        height:28px;
        color:white;
        display: flex;
        border-radius: 4px;
        align-items: center;
        margin-right:5px;
        padding:0 10px;
        span{
          font-size: 20px;
          font-weight: 600;
          margin-top: 4px;
        }

      }
      label{
        font-size: 18px;
        margin-left:5px;
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
          color:black;
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
          background:#dd4b39;
          span{
            font-size: 20px;
            font-weight: 600;
            margin-top:5px;
          }
        }
      }
    }
  }
}
.liSpan{
  color:black;
}
tr{
  td{
    justify-content: center;
    p{
      display: flex;
      flex-direction: column;
      span{
        color:black;
        font-size: 12px;
      }
    }
  }
}
</style>
