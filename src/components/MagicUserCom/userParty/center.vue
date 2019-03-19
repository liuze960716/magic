<template>
 <div class="center">
  <table>
    <tr class="tr1">
      <a href="javascript:;"><span class="iconfont icon-jiahao"></span>新增</a>
      <p><input type="text" placeholder="查找..."/><span class="iconfont icon-fangdajing"></span></p>
    </tr>
    <tr>
      <td class="td1" width="60px">ID<span class="iconfont icon-xiajiantoushixinxiao"></span></td>
      <td width="154px">部门</td>
      <td width="100px">真实姓名</td>
      <td width="100px">用户名</td>
      <td width="71px">角色</td>
      <td width="171px">电话</td>
      <td width="71px">工资</td>
      <td width="71px">禁用</td>
      <td width='300px'>操作</td>
    </tr>
    <tr v-for="(item,index) in centerList" :key="index">
      <td class="td1" width="60px">{{item.id}}</td>
      <td width="154px">{{item.bumen}}</td>
      <td width="100px">{{item.name}}</td>
      <td width="100px">{{item.user}}</td>
      <td width="71px">{{item.jiao}}</td>
      <td width="171px">{{item.tal}}</td>
      <td width="71px">{{item.gong}}</td>
      <td width="71px"><input type="checked" checked style="display:block;width:20px;height:20px;"/></td>
      <td width='300px'>
          <a href="javascript:;" style="width:60px; display:block">
            <span class="iconfont icon-xiugaimima"></span>
          修改
          </a>
          <a href="javascript:;" style="background:red;width:60px;display:block">
           <span class="iconfont icon-shanchu"></span>
          删除
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
              this.centerList = data.userParty;
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
