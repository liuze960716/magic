<template>
   <div class="box">
      <el-main>
          <div id="main2" :style="{width:'1260px',height:'600px'}"></div>
      </el-main>
     <router-view></router-view>
   </div>
</template>

<script>

//  import "@/assets/js/echarts.min.js"
// //  import  "../../assets/js/zhexian.js"
// import "@/assets/js/china.js"
import echarts from 'echarts'
import world from 'echarts/map/json/china.json'
import  'echarts/map/js/china'
echarts.registerMap('world', world)
 export default {
    data() {
      return {
          name:'MagicMap'
      }
    },
    components: {
   
   },
   mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
         //初始化echarts实例
        var myChart2 =this.$echarts.init(document.getElementById('main2'));
          var mydata2 = [  
                {name: '北京',value: '100' },{name: '天津',value: '100'},  
                {name: '上海',value: '200'},{name: '重庆',value: '100'},  
                {name: '河北',value: '500'},{name: '河南',value: '100'},  
                {name: '云南',value: '200'},{name: '辽宁',value: '500'},  
                {name: '黑龙江',value: '500'},{name: '湖南',value: '100'},  
                {name: '安徽',value: '200'},{name: '山东',value: '100'},  
                {name: '新疆',value: '100'},{name: '江苏',value: '100'},  
                {name: '浙江',value: '500'},{name: '江西',value: '600'},  
                {name: '湖北',value: '100'},{name: '广西',value: '400'},  
                {name: '甘肃',value: '600'},{name: '山西',value: '100'},  
                {name: '内蒙古',value: '100'},{name: '陕西',value: '300'},  
                {name: '吉林',value: '100'},{name: '福建',value: '100'},  
                {name: '贵州',value: '600'},{name: '广东',value: '106'},  
                {name: '青海',value: '100'},{name: '西藏',value: '600'},  
                {name: '四川',value: '100'},{name: '宁夏',value: '100'},  
                {name: '海南',value: '200'},{name: '台湾',value: '100'},  
                {name: '香港',value: '100'},{name: '澳门',value: '200'}  
            ]; 
    var optionMap2 = {  
                backgroundColor: '#FFFFFF',  
                title: {  
                    text: '全国地图大数据',  
                    subtext: '',  
                    x:'center'  
                },  
                tooltip : {  
                    trigger: 'item'  
                },  
                
                //左侧小导航图标
                visualMap: {  
                    show : true,  
                    x: 'left',  
                    y: 'center',  
                    splitList: [   
                        {start: 500, end:600},{start: 400, end: 500},  
                        {start: 300, end: 400},{start: 200, end: 300},  
                        {start: 100, end: 200},{start: 0, end: 100},  
                    ],  
                    color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
                },  
                
                //配置属性
                series: [{  
                    name: '数据',  
                    type: 'map',  
                    mapType: 'china',   
                    roam: true,  
                    label: {  
                        normal: {  
                            show: true  //省份名称  
                        },  
                        emphasis: {  
                            show: false  
                        }  
                    },  
                    data:mydata2  //数据
                }]  
            };  

        // //初始化echarts实例
        // var myChart =this.$echarts.init(document.getElementById('mychart'));

        //使用制定的配置项和数据显示图表
        myChart2.setOption(optionMap2);
      }
    }
 }
 
</script>

<style>
.box{
  width: 1288px;
    flex:1;
    height:100%;
}
.el-main {
    border-left:1px solid #cccccc;
    padding: 0;
    height: 600px;
  }
#main2{
    width:1280px;
    height:750px;
}
</style>
