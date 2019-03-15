<template>
  <div class="bigBox">
    <div class="echarts">
      <div class="echarts-one">
        <h3>流程使用排名</h3>
        <div id="myChart"></div>
      </div>
      <div class="echarts-two">
        <h3>流程使用排名</h3>
        <div id="myChart1"></div>
      </div>
    </div>
    <div class="echarts2">
      <div class="echarts-three">
        <h3>流程使用排名</h3>
        <div id="myChart2"></div>
      </div>
      <div class="echarts-four">
        <h3>流程使用排名</h3>
        <div id="myChart3"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'MagicEchartsSection',
    data () {
      return {

      }
    },
    components: {

    },
    mounted(){
      this.drawLine();
      this.myChart1();
      this.myChart2();
      this.myChart3();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top:'10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              barWidth: '50%',
              data:[100, 52, 200, 234, 190, 330, 220]
            }
          ]
        });
      },
      myChart1(){
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        var axisData = ['周一','周二','周三','周四','周五','周六','周日'];
        var data = axisData.map(function (item, i) {
          return Math.round(Math.random() * 1000 * (i + 1));
        });
        var links = data.map(function (item, i) {
          return {
            source: i,
            target: i + 1
          };
        });
        links.pop();
        myChart1.setOption({
          title: {
            // text: '笛卡尔坐标系上的 Graph'
          },
          tooltip: {},
          xAxis: {
            type : 'category',
            // boundaryGap : false,
            data : axisData
          },
          grid: {
            top:'10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis: {
            type : 'value'
          },
          series: [
            {
              type: 'graph',
              layout: 'none',
              coordinateSystem: 'cartesian2d',
              symbolSize: 40,
              label: {
                normal: {
                  show: true
                }
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              data: data,
              links: links,
              lineStyle: {
                normal: {
                  color: '#2f4554'
                }
              }
            }
          ]
        })
      },
      myChart2(){
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))

        setInterval(function () {
          myChart2.setOption({
            tooltip : {
              formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
              feature: {
                restore: {},
                saveAsImage: {}
              }
            },
            series: [
              {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value:(Math.random() * 100).toFixed(2) - 0, name: '完成率'}]
              }
            ]
          });
        },2000)
      },
      myChart3(){
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        myChart3.setOption({
          title: {
            // text: '漏斗图',
            // subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          calculable: true,
          series: [
            {
              // name:'漏斗图',
              type:'funnel',
              left: '20%',
              top: 60,
              //x2: 80,
              bottom: 60,
              width: '60%',
              // height: {totalHeight} - y - y2,
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside'
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                label: {
                  fontSize: 20
                }
              },
              data: [
                {value: 60, name: '周一'},
                {value: 40, name: '周二'},
                {value: 20, name: '周三'},
                {value: 80, name: '周四'},
                {value: 100, name: '周五'},
                {value: 30, name: '周六'},
                {value: 50, name: '周日'}
              ]
            }
          ]

        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  .bigBox{
    width:100%;
    /*height:100%;*/
  }
  .echarts{
    display: flex;
    // width:100%;
    // height:100%;
    margin-bottom:30px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left:20px;
    margin-right:20px;
    .echarts-one{
      width:45%;
      height:200px;
      border:1px solid gray;
      h3{
        font-size: 18px;
        color:black;
        // padding-left:40px;
        text-align: center;
        padding-top:5px;
        padding-bottom:5px;
        border-bottom:1px solid gray;
        background:rgb(179, 171, 171);
      }
      #myChart{
        // width:100%;
        flex:1;
        height:170px;
      }
    }
    .echarts-two{
      width:45%;
      height:200px;
      border:1px solid gray;
      // margin-right:20px;

      h3{
        font-size: 18px;
        color:black;
        // padding-left:40px;
        text-align: center;
        padding-top:5px;
        padding-bottom:5px;
        border-bottom:1px solid gray;
        background:rgb(179, 171, 171);
      }
      #myChart1{
        flex:1;
        height:170px;
      }
    }
  }
  .echarts2{
    display: flex;
    // width:100%;
    /*height:100%;*/
    margin-left:20px;
    margin-right:20px;
    justify-content: space-between;
    .echarts-three{
      width:45%;
      height:350px;
      border:1px solid gray;
      h3{
        font-size: 18px;
        color:black;
        // padding-left:40px;
        text-align: center;
        padding-top:5px;
        padding-bottom:5px;
        border-bottom:1px solid gray;
        background:rgb(179, 171, 171);
      }
      #myChart2{
        flex:1;
        // height:350px;
        height:100%;
      }
    }
    .echarts-four{
      width:45%;
      height:350px;
      border:1px solid gray;
      h3{
        font-size: 18px;
        color:black;
        // padding-left:40px;
        text-align: center;
        padding-top:5px;
        padding-bottom:5px;
        border-bottom:1px solid gray;
        background:rgb(179, 171, 171);
      }
      #myChart3{
        flex:1;
        height:350px;
      }
    }
  }
</style>
