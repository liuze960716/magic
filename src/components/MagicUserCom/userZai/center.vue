<template>
 <div class="center">
  <table>
    <tr class="tr1">
      <a href="#"><span class="iconfont icon-jiahao"></span>新增</a>
      <p><input type="text" placeholder="查找..."/><span class="iconfont icon-fangdajing"></span></p>
    </tr>
    <tr>
      <td class="td1" width="60px">ID<span class="iconfont icon-xiajiantoushixinxiao"></span></td>
      <td width="54px">名称</td>
      <td width="150px">电话</td>
      <td width="180px">邮箱</td>
      <td width="71px">排序</td>
      <td width='300px'>操作</td>
    </tr>
    <tr v-for="(item,index) in centerList" :key="index">
      <td class="td1" width="60px">{{item.id}}</td>
      <td width="54px">{{item.ming}}</td>
      <td width="150px">{{item.tal}}</td>
      <td width="180px">{{item.email}}</td>
      <td width="71px">{{item.pai}}</td>
      <td width='300px'>
         <a href="#" style="background:gray;width:90px;">
           <span class="iconfont icon-xiangshangjiantou"></span>上移
          </a>
          <a href="#" style="background:gray;width:90px;">
            <span class="iconfont icon-xiangxiajiantou"></span>下移
          </a>
          <a href="#" style="width:90px;">
            <span class="iconfont icon-xiugaimima"></span>修改
          </a>
          <a href="#" style="background:red;width:90px;">
           <span class="iconfont icon-shanchu"></span>删除
          </a>
          <a href="#" style="background:#00a65a;width:90px;">
            <span class="iconfont icon-jiahao"></span>新增
          </a>
      </td>
    </tr>
  </table>
 </div>
</template>

<script>
import index from '../../../apis/index.js'
 export default {
   name:'MagicUserCenter',
   data () {
     return {
       centerList:[]
     }
   },
   components: {

   },
   methods:{
       _initData(){
          index.getPush(data=>{
              console.log(data)
              this.centerList = data.userCom;
              console.log(11111,this.centerList);
          })
      },
   } ,
   created(){
      this._initData()
    },
 }
</script>

<style lang='scss' scoped>
  input{
    outline: none;
  }
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
            margin-left: 15px;
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

        }
      }
    }
  }
  .liSpan{
  width:50px;
  height:25px;
  background:#00a65a;
  border-radius: 4px;
  color:white;
  line-height: 25px;
  text-align: center;
}
</style>
