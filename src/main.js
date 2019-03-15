// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//公共的样式
import './assets/css/common.css'
// 引入jq
import 'jquery/dist/jquery'
import './assets/js/jquery-1.8.3'
//引入小图标
import './assets/iconfont.css'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
//引入bootstrap
// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import './assets/css/bootstrap.min.css'
// import './assets/css/skin-blue.min.css'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = true;


new Vue({
  el: '#app',
  router,
  // mode: 'history',
  render(h){
    return h(App)
  }
});


