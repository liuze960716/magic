<template>
 <div class="center">
  <table>
    <tr class="tr1">
      <a href="javascript:;"><span class="iconfont icon-jiahao"></span>新增</a>
      <p><input type="text" placeholder="查找..."/><span class="iconfont icon-fangdajing"></span></p>
    </tr>
    <tr>
      <td class="td1" width="60px">ID<span class="iconfont icon-xiajiantoushixinxiao"></span></td>
      <td width="54px">类型</td>
      <td width="150px">标题</td>
      <td width="180px">发布时间</td>
      <td width="71px">发布人</td>
      <td width="180px">部门</td>
      <td width="59px">状态</td>
      <td width="54px">附件</td>
      <td width='228px'>操作</td>
    </tr>
    <tr v-for="(item,index) in centerList" :key="index">
      <td class="td1" width="60px">{{item.id}}</td>
      <td width="54px">{{item.type}}</td>
      <td width="150px">{{item.biao}}</td>
      <td width="180px">{{item.time}}</td>
      <td width="71px">{{item.person}}</td>
      <td width="180px">{{item.bumen}}</td>
      <td width="59px"><span class="liSpan yiban">{{item.zhuang}}</span></td>
      <td width="54px"><span class="iconfont icon-fujian" v-if="item.fujian==1"></span></td>
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
import index from '@/apis/index.js'
 export default {
   name:'noticeCenter',
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
              this.centerList = data.notice;
              console.log("132",this.centerList);
          })
      },
   } ,
   created(){
      this._initData()
    },
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

</style>
