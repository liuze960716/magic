<template>
  <div class="body">
    <!--header-->
    <header></header>
    <!--section-->
    <section>
      <!--aside-->
      <aside></aside>
      <!--main-->
      <main>
        <div class="m_header">
          <h1>任务查看</h1>
          <div class="m_r">
            <a href="javascript" class="m_a">
              <img src="/static/img/a2.jpg">
              首页
            </a>
            > 任务查看
          </div>
        </div>
        <div class="content">
          <div class="con_header">
            <a href="index.html" class="con_hea_a" @click="$router.back()">
              <img src="/static/img/a2.png">
              返回
            </a>
            <a href="index.html" class="con_hea_a">
              <img src="/static/img/a3.png">
              打印
            </a>
          </div>
          <div class="con_task">
            <h2>新员工培训</h2>
            <h3>
              <span>发布：盖茨 参加人员：李四、张三、盖茨</span>
              <span>2017/8/9 12:33:10</span>
            </h3>
          </div>
          <div class="con_task">
            <h2 class="task_sec">到会议中心进行就业前业务培训</h2>
            <div>
              <p class="task_pro">任务进度（2017-08-09 至 2017-08-16）</p>
              <el-progress :percentage="70" :color="'#00c0ef'"></el-progress>
              <br/>
              <div class="name">
                【盖茨】 【盖茨】
              </div>
            </div>
            <div class="m_tj">
              <div class="m_s">
                <label>状态</label>
                <select>
                  <option>
                    新任务
                  </option>
                  <option>
                    已接收
                  </option>
                  <option>
                    进行中
                  </option>
                  <option>
                    已完成
                  </option>
                </select>
              </div>
              <div class="m_s">
                <label>反馈</label>
                <input type="text" class="txt">
              </div>
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>增加附件</label>
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <input type="button" value="保存" class="btn">
              <input type="button" value="取消" class="btn">
            </div>
          </div>
        </div>
      </main>
    </section>

  </div>
</template>

<script>
  export default{
    name: 'MagicCheckTask',
    data() {
      return {

      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    },

  }
</script>

<style scoped>
  span{
    outline: none;
  }
  #app{
    height:100%;
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
  .m_r{
    font-size: 12px;
    color: #777777;
    line-height: 23px;
  }
  .con_header{
    padding-top: 6px;
    display: flex;
    align-items: center;
    height: 41px;
    border-bottom: 1px solid #f4f4f4;
  }
  .con_header .con_hea_a{
    font-size: 12px;
    color: #fff;
    width: 58px;
    height: 25px;
    border-radius:3px;
    background: #6c7b8b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-left: 10px;
  }
  .con_header .con_hea_a:last-child{
    font-size: 12px;
    color: #fff;
    width: 58px;
    height: 25px;
    border-radius:3px;
    background: #3c8dbc;
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
    border-radius:2px;
    margin-left: 15px;
    margin-right: 15px;
    box-shadow: inset 1px 3px 2px #d2d6de;
  }
  .con_task{
    text-indent: 12px;
    border-top: 1px solid #f4f4f4;
  }
  .con_task h2{
    font-size: 20px;
    color: #333333;
    font-weight: 100;
    padding-top: 32px;
  }
  .con_task h3{
    display: flex;
    justify-content: space-between;
    font-weight: 100;
    padding-top: 2px;
    padding-right: 13px;
  }
  .con_task h3 span{
    font-size: 12px;
    color: #a69999;
    padding-top: 2px;
    padding-bottom: 10px;
  }
  .con_task h2.task_sec{
    font-size: 14px;
    color: #333333;
    font-weight: 100;
    padding-top: 14px;
    padding-bottom: 26px;
  }
  .con_task .task_sec{
    font-size:12px ;
    color: #333333;
  }
  .name{
    padding-top: 22px;
    border-top: 1px solid #eeeeee;
    font-size: 16px;
    color: #008000;
  }
  main .m_tj{
    border-top: 1px solid #f4f4f4;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
  main .m_s{
    width: 49%;
  }
  main .m_s label{
    display: block;
    font-weight: 600;
    margin-bottom: 6px;
    margin-top: 12px;
  }
  main .m_s select{
    width: 100%;
    height: 32px;
    border: 1px solid #d2d6de;
    text-indent: 16px;
    font-size: 14px;
  }
  main .m_s .rq{
    width: 100%;
    height: 32px;
    border: 1px solid #d2d6de;
    text-indent: 6px;
    font-size: 14px;
  }
  main .m_s .txt{
    width: 100%;
    height: 32px;
    border: 1px solid #d2d6de;
    text-indent: 16px;
  }
  main .m_s .are{
    width: 100%;
    height: 111px;
    border: 1px solid #d2d6de;
    text-indent: 16px;
    font-size: 14px;
  }
  main .m_s .btn{
    margin-top: 52px;
    width: 52px;
    height: 32px;
    font-size: 12px;
    color: #fff;
    margin-bottom: 10px;
    border-radius:3px;
  }
  main .m_s .btn:first-child{
    background: #3c8dbc;
    border: 1px solid #3c83ac;
  }
  main .m_s .btn:last-child{
    background: #f4f4f4;
    border: 1px solid #dddddd;
    color: #444444;
  }


</style>
