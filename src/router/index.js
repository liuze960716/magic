import Vue from 'vue'
import Router from 'vue-router'
import MagicCommon from '../page/MagicCommon'
import MagicSectionRight from'../components/common/MagicSectionRight'
import MagicWork from'../components/Magicwork/MagicWork'
import MagicSystemType from'../components/MagicSystem/MagicSystemType'
import magicEchaters from'../components/Echarts/MagicEcharts'
import MaginDiscussSection from'../components/MagicDiscuss/MaginDiscussSection'
import MagicLogin from'../page/MagicLogin'


Vue.use(Router);

export default new Router({
  routes:[
    {
      path:"/",
      component:MagicCommon,
      children:[
        {
          path:"",
          component:MagicSectionRight
        },
        {
          path:"MagicSectionRight",
          component:MagicSectionRight
        },
        {
          path:"MagicWork",
          component:MagicWork
        },
        {
          path:"MagicSystemType",
          component:MagicSystemType
        },
        {
          path:"magicEchaters",
          component:magicEchaters
        },
        {
          path:"MaginDiscussSection",
          component:MaginDiscussSection
        }
      ]
    },
    {
      path:"/MagicLogin",
      component:MagicLogin,
    }
  ],
  mode: "history" //作用是为了消除url中后面的/#/
})
