<template>
  <div class="content">
    <div class="content_left">
      <a href="##"><span class="iconfont icon-bi"></span>新建</a>
      <div class="note">
        <h3>笔记</h3>
        <a id="btn1" href="#" @click.prevent="add()"><i class="el-icon-plus"></i></a>
        <a id="btn2" href="#" @click.prevent="add"><i class="el-icon-minus"></i></a>
      </div>
      <div class="classify">
        <h3>分类</h3>
        <input type="text"/><span>新增</span>
      </div>
      <div class="mold">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="类型" name="1">
            <div class="info">
              <span class="iconfont icon-xiugaimima"></span>
              <span class="spans">我的笔记</span>
            </div>
            <div class="info">
              <span class="iconfont icon-xiugaimima"></span>
              <span class="spans">我的笔记</span>
            </div>
            <div class="info">
              <span class="iconfont icon-xiugaimima"></span>
              <span class="spans">我的笔记</span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="content_right">
        <div class="Lately">
          <div class="line_one">
            <h3>最近</h3>
            <p><input type="text" placeholder="查找..."/><span class="iconfont icon-fangdajing"></span></p>
          </div>
          <div class="line_two">
            <span class="iconfont icon-fangdajing"></span>
            <span class="iconfont icon-shanchu2"></span>
            <span class="iconfont icon-xingxing1"></span>
            <span class="iconfont icon-shuaxin"></span>
          </div>
          <div class="line_three">
            <p>暂无信息</p>
          </div>
          <div class="line_four">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
              </el-pagination>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
 export default {
   name:'MagicContent',
   data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
 }
</script>
<style lang='scss' scoped>
 .content{
    display: flex;
    height: 100%;
    .content_left{
      width: 25%;
      background: #f7f7f7;
      margin:0 15px;
      a{
        background: #3c8dbc;
        color:white;
        height: 32px;
        display: block;
        text-align: center;
        line-height: 32px;
        border-radius: 5px;
        font-size: 14px;
      }
      .note{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:20px;
        height: 37px;
        background: #fff;
        h3{
          padding-left:10px;
        }
        #btn1{
          padding-right:10px;
          background: #fff;
          color:black;
        }
        #btn2{
          padding-right:10px;
          background: #fff;
          color:black;
          display: none;
        }


      }
      .classify{
        height: 90px;
        background: #fff;
        margin-top:20px;
        h3{
          padding-left:10px;
          height: 38px;
          line-height: 38px;
          border-bottom:1px solid #999;
        }
        input{
          height: 30px;
          width: 165px;
          margin-left:10px;
          margin-top:10px;
          float: left;
          // vertical-align: middle;
          border:1px solid #999;
          outline: none;

        }
        span{
          display: block;
          width: 50px;
          height: 30px;
          background: #3c8dbc;
          text-align: center;
          line-height: 30px;
          float: left;
          margin-top:10px;
        }

      }
      .mold{
        margin-top:20px;
        .info{
          p{
            background: #fff;
            padding-left:15px;
            color: #000;
            height: 38px;
            line-height: 38px;
            border-top: 1px solid #f7f7f7;
            span{
              margin-right:10px;
            }
          }
        }
      }
    }
    .content_right{
      flex: 1;
      margin-right:15px;
      // overflow-y: auto;
      // padding-left:10px;
      .Lately{
          background: #fff;
          .line_one{
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          background: #fff;
          padding:0 10px;
          p{
            display: flex;
            input{
              border:1px solid #999;
              outline: none;
              height: 26px;
              vertical-align: middle;
            }
              ::-webkit-input-placeholder{color:#999}
            span{
                display:inline-block;
                width: 26px;
                height: 26px;
                font-size: 16px;
                background: #f4f4f4;
                text-align: center;
                line-height: 26px;
                border:1px solid #999;
                border-left:none;
              }
            }
          }
          .line_two{
            padding:0 10px;
            display: flex;
            height: 36px;
            background: #fff;
            border-top:1px solid #f7f7f7;
            align-items: center;
            span{
              display: inline-block;
              height: 26px;
              width: 26px;
              background: #f4f4f4;
              text-align: center;
              line-height: 26px;
              margin-right: 4px;
              border-radius: 3px;
              border:1px solid #999;
            }
          }
          .line_three{
            line-height: 30px;
            background: #fff;
            border-top: 1px solid #f7f7f7;
            text-align: center;
            padding:6px;
          }
          .line_four{
            // height: 36px;
            border-top: 1px solid #f7f7f7;
            padding:10px;
            text-align: center;
          }
      }
    }
}
.spans{
  color:black;
}
.content .content_left a[data-v-7e4d56f1]{
  margin-right:10px;
}
.info{
  margin:5px;
  border-bottom:1px solid #eee;
}

</style>
