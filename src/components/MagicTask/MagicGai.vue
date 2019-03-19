<template>
  <div class="body">

    <!--section-->
    <section>

      <!--main-->
      <main>
        <div class="m_header">
          <h1>任务管理</h1>
          <div class="m_r">
            <a href="javascript" class="m_a">
              <img src="/static/img/a2.jpg">
              首页
            </a>
            > 任务管理
          </div>
        </div>
        <div class="content">
          <div class="con_header">
            <router-link to="/MagicTask" class="con_hea_a" tag="a">
              <img src="/static/img/a2.png">
              返回
            </router-link>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>类型</label>
              <select>
                <option>
                  公事
                </option>
                <option>
                  私事
                </option>
              </select>
            </div>
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
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>开始日期</label>
              <input type="date" value="2019/3/13" class="rq">
            </div>
            <div class="m_s">
              <label>结束日期</label>
              <input type="date" value="2019/3/13" class="rq">
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>标题</label>
              <input type="text" class="txt">
            </div>
            <div class="m_s">
              <label>接收</label>
              <input type="text" class="txt">
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>描述</label>
              <textarea class="are"></textarea>
            </div>
            <div class="m_s">
              <label>评价</label>
              <textarea class="are"></textarea>
            </div>
          </div>
          <div class="m_tj">
            <div class="m_s">
              <label>置顶</label>
              <!-- `checked` 为 true 或 false -->
              <el-checkbox v-model="checked"></el-checkbox>
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
    export default {
        name: "MagicGai",
        data(){
            return{
              checked: true
            }
        }
    }
</script>

<style scoped>
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
    background: #6c7b8b;
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
