<template>
  <div class="body">

    <!--section-->
    <section>
      <!--main-->
      <main>
        <div class="m_header">
          <h1>我的任务</h1>
          <div class="m_r">
            <a href="#" class="m_a">
              <img src="/static/img/a2.jpg">
              首页
            </a>
            > 任务管理
          </div>
        </div>
        <div class="content">
          <div class="con_header">
            <router-link to="/MagicGai" class="con_hea_a" tag="a">
              <img src="/static/img/a1.jpg">
              新增
            </router-link>
            <div class="con_search">
              <input type="text" value="查找...">
              <a href="#" class="con_sea_a">
                <img src="/static/img/a1.png">
              </a>
            </div>
          </div>
          <div class="main_con">
            <table cellpadding="2" cellspacing="0">
                  <tr height="38">
                    <td width="68">
                      <span><a href="javascript" style="color: #3c8dcb;">ID</a></span>
                    </td>
                    <td width="106">
                      <span>类型</span>
                    </td>
                    <td width="300">
                      <span>标题</span>
                    </td>
                    <td width="360">
                      <span>发布时间</span>
                    </td>
                    <td width="142">
                      <span>发布人</span>
                    </td>
                    <td width="140">
                      <span>部门</span>
                    </td>
                    <td width="148">
                      <span><a href="#" style="color: #3c8dcb;" >状态</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                      <span>操作</span>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="#" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="#" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                      <router-link to="MagicCheckTask">
                        <span><a href="#" class="xiugai">查看</a></span>
                      </router-link>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="#" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="#" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                      <router-link to="MagicCheckTask">
                        <span><a href="#" class="xiugai">查看</a></span>
                      </router-link>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="#" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="#" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                      <router-link to="MagicCheckTask">
                        <span><a href="#" class="xiugai">查看</a></span>
                      </router-link>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="#" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="#" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                      <router-link to="MagicCheckTask">
                        <span><a href="#" class="xiugai">查看</a></span>
                      </router-link>
                    </td>
                  </tr>
                  <tr height="38">
                    <td width="68">
                      <span><a href="#" style="color: #000;">1</a></span>
                    </td>
                    <td width="106">
                      <span>公事</span>
                    </td>
                    <td width="300">
                      <span>财务科工资报表制作</span>
                    </td>
                    <td width="360">
                      <span>2015/11/24 23:17:10</span>
                    </td>
                    <td width="142">
                      <span>盖茨</span>
                    </td>
                    <td width="140">
                      <span>总公司</span>
                    </td>
                    <td width="148">
                      <span><a href="#" class="wanchen">已完成</a></span>
                    </td>
                    <td width="110">
                      <span>附件</span>
                    </td>
                    <td width="300">
                      <router-link to="MagicCheckTask">
                        <span><a href="#" class="xiugai">查看</a></span>
                      </router-link>
                    </td>
                  </tr>
                  <tr height="38">
                <td width="68">
                  <span><a href="#" style="color: #000;">1</a></span>
                </td>
                <td width="106">
                  <span>公事</span>
                </td>
                <td width="300">
                  <span>财务科工资报表制作</span>
                </td>
                <td width="360">
                  <span>2015/11/24 23:17:10</span>
                </td>
                <td width="142">
                  <span>盖茨</span>
                </td>
                <td width="140">
                  <span>总公司</span>
                </td>
                <td width="148">
                  <span><a href="#" class="wanchen">已完成</a></span>
                </td>
                <td width="110">
                  <span>附件</span>
                </td>
                <td width="300">
                  <router-link to="MagicCheckTask">
                    <span><a href="#" class="xiugai">查看</a></span>
                  </router-link>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"

            :page-size="20"
            :background=true
            layout="prev, pager, next, jumper"
            :total="1000">
          </el-pagination>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
  // import index from '../../apis/index.js'
    export default {
      name: "MagicMyTask",
      methods: {
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },

        add(){
          taskApi.addTaskInfo(data=>{
            if(data.msg){

            }
          })
        },
        del(){},
      },
    }
</script>

<style scoped>
  input{
    outline: none;
  }

  span{
    color: black;
  }

  .el-pagination {
    padding: 8px 15px;
    float: right;
  }
  .body{
    display: flex;
    flex-direction: column;
    height:100%;
  }

  /*section*/
  section{
    flex: 1;
    display: flex;
    overflow-y: hidden;
  }
  /*main*/
  main{
    width: 1280px;
    background: #ecf0f5;
    display: flex;
    flex-direction: column;
  }
  .m_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .m_header h1{
    font-size: 22px;
    color: #000;
    font-weight: 100;
  }
  .m_r .m_a{
    vertical-align: middle;
    color: #000;
  }
  .m_r img{
    display: inline-block;
    width: 12px;
    height: 9px;
  }
  .wanchen{
    display: inline-block;
    width: 45px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #00a65a;
    color: #fff;
    border-radius:4px;
    font-size: 12px;
  }
  .xiugai{
    display: inline-block;
    width: 45px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #3c8dbc;
    color: #fff;
    border-radius:4px;
    font-size: 12px;
  }
  .del{
    display: inline-block;
    width: 45px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #dd4b39;
    color: #fff;
    border-radius:4px;
    font-size: 12px;
  }
  .m_r{
    font-size: 12px;
    color: #777777;
    line-height: 23px;
  }
  .con_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 41px;
  }
  .con_header .con_hea_a{
    font-size: 12px;
    color: #fff;
    width: 58px;
    height: 25px;
    border-radius:3px;
    background: #00a65a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-left: 10px;
  }
  .con_header a img{
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 3px;
  }
  .content{
    background: #fff;
    background: #fff;
    border-radius:2px;
    margin-left: 15px;
    margin-right: 15px;
    box-shadow: inset 1px 3px 2px #d2d6de;
  }
  .con_search{
    display: flex;
    height: 28px;
    margin-right: 11px;
  }
  .con_search input{
    font-size: 12px;
    color: #999999;
    width: 115px;
    height: 28px;
    border: 1px solid #d2d6de;
    border-right:none;
    text-indent: 5px;
  }
  .con_search .con_sea_a{
    width: 31px;
    height: 28px;
    border: 1px solid #d2d6de;
    background: #f4f4f4;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .con_search a img{
    width: 12px;
    height: 12px;
    display: inline-block;
  }
  .main_con table{

  }
  .main_con table tr:first-child{
    font-weight: 600;
  }
  .main_con table td{
    padding-left: 8px;
    border-top: 1px solid #f4f4f4;
  }
  .main_con table tr:hover td{
    background: skyblue;
    transition: all 0.5s ease;
  }


</style>
