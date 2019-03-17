import Vue from 'vue'
import Router from 'vue-router'
import MagicCommon from '../page/MagicCommon'
import MagicSectionRight from'../components/common/MagicSectionRight'
import MagicWork from'../components/Magicwork/MagicWork'
import MagicSystemType from'../components/MagicSystem/MagicSystemType'
import MagicEchaters from'../components/Echarts/MagicEcharts'
import MaginDiscussSection from'../components/MagicDiscuss/MaginDiscussSection'
import MagicLogin from'../page/MagicLogin'
import MagicAlbum from'../components/MagicAlbum/MagicAlbum'
import MagicCalendar from'../components/MagicCalendar/MagicCalendar'
import MagicAccount from'../components/MagicAccount/MagicAccount'


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
          path:"MagicEchaters",
          component:MagicEchaters
        },
        {
          path:"MaginDiscussSection",
          component:MaginDiscussSection
        },
        {
          path:"MagicAlbum",
          component:MagicAlbum
        },
        {
          path:"MagicCalendar",
          component:MagicCalendar
        },
        {
          path:"MagicAccount",
          component:MagicAccount
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
