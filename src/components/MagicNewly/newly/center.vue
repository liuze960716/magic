<template>
 <div class="center">
   <div class="xinzeng" style="border-top:3px solid #d2d6de;background:#ffffff;box-shadow:2px 2px 2px 2px #e6eaef">
      <div class="diyi" style="background:#ffffff;" >
      	<tr>
			    <td style="width: 517px;">
				    <p style="margin-top:11px;margin-bottom: 8px;">类型</p>
				    <select name="" style="width: 484px;height: 33px;outline: none;">
					    <option value="">请假</option>
					    <option value="">加班</option>
					    <option value="">报销</option>
					    <option value="">出差</option>
				    </select>
			    </td>
			    <td>
				    <p style="margin-top:11px;margin-bottom: 8px;">状态</p>
				    <select name="" style="width: 484px;height: 33px;outline: none;">
              <option value="">请假</option>
              <option value="">加班</option>
              <option value="">报销</option>
              <option value="">出差</option>
            </select>
          </td>
      	</tr>
      	<tr>
      		<td>
      			<div class="box">
					    <div class="demo1">
                <p style="margin-top:11px;margin-bottom: 8px;">开始时期</p>
                <input @click="qq()" class="laydate-icon rili" id="demo" value="2014-6-25更新">
              </div>
				    </div>
      		</td>
      		<td>
      			<div class="box">
              <div class="demo1">
                <p style="margin-top:11px;margin-bottom: 8px;">结束时间</p>
                <input @click="po()" class="laydate-icon rili" id="hh" value="2014-6-25更新">
              </div>
				  	</div>
      		</td>
      	</tr>
      	<tr>
      		<td>
      			<p style="margin-top:11px;margin-bottom: 8px;">标题</p>
      			<input class="rili input1" type="text" />
      		</td>
      		<td>
      			<p style="margin-top:11px;margin-bottom: 8px;">链接</p>
      			<input class="rili input1" type="text" />
      		</td>
      	</tr>
      	<tr>
      		<td>
      			<p style="margin-top:11px;margin-bottom: 8px;">描述</p>
      			<textarea style="width: 480px;height: 100px;"></textarea>
      		</td>
      		<td>
      			<p style="margin-top:11px;margin-bottom: 8px;">置顶</p>
      			<input type="checkbox" style="width: 20px;height: 20px;"/>
      		</td>
      	</tr>
      	<hr style="color:#efefef ;" />
      	<tr style="margin-bottom: 10px;">
      		<td class="tds">
            <input type="button" value="保存">
            <input type="button" value="取消">
      			<!--<img src="../../../../static/img/baocun.jpg" />-->
      			<!--<img src="../../../../static/img/quxiao.jpg" />-->
      		</td>
      	</tr>
       </div>
      </div>
 </div>
</template>

<script>
	import '@/assets/css/laydate.1.css'
	import 'static/echarts/laydate.js'
	import '@/assets/css/laydate.css'
  export default {
   name:'newlyCenter',
   data () {
     return {
       centerList:[
         {

         }
       ]
     }
   },
   components: {

   },
   methods:{
		qq(){
			!function(){
					laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
					laydate({elem: '#demo'});//绑定元素
//					laydate({elem:'#hh'});
				}();
	//日期范围限制
        },
          po(){
            !function(){
                laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
                laydate({elem: '#hh'});//绑定元素
      //					laydate({elem:'#hh'});
              }();
        //日期范围限制
        }
   }
 }
</script>

<style lang='scss' scoped>
.center{
  /*width:100%;*/
  /*padding-bottom:20px;*/
}
.xinzeng{
  width:97%;
  margin:0 17px;
}
.icon-fangdajing{
 text-align: center;
 line-height: 27px;
}
.diyi{
  margin-left:10px;
}
.diyigetr td{
	font-weight: 600;
}
@media screen and (max-width:700px){
  .top{
    flex-direction: column;
  }
  .topdier{
     color: #948688;
     margin-top:-10px;
  }
  .icon-shouye{
    line-height: 27px;
    display:inline-block;
  }
  }
.rili{
	width: 460px;
	height: 33px;
	border: 1px solid #d5d5d5;
	outline: none;
}
.tds{
  display: flex;
  padding-bottom: 15px;
  img{
    margin-right:10px;
  }
}
.input1{
  width:480px;
}
</style>
