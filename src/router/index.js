import Vue from 'vue'
import Router from 'vue-router'
import MagicCommon from '../page/MagicCommon'
import MagicSectionRight from'../components/common/MagicSectionRight'
import MagicWork from'../components/Magicwork/MagicWork'

import MagicSystemType from '../components/MagicType/MagicSystemType'
import MagicMenuType from'../components/MagicMenu/MagicMenuType'

import MagicEchaters from'../components/Echarts/MagicEcharts'
import MaginDiscussSection from'../components/MagicDiscuss/MaginDiscussSection'
import MagicLogin from'../page/MagicLogin'
import MagicAlbum from'../components/MagicAlbum/MagicAlbum'
import MagicCalendar from'../components/MagicCalendar/MagicCalendar'
import MagicAccount from'../components/MagicAccount/MagicAccount'

import MagicUser from'../components/MagicUser/MagicUser'
import MagicNewly from'../components/MagicNewly/MagicNewly'
import MagicNotice from'../components/MagicNotice/MagicNotice'
import MagicInform from'../components/MagicImform/MagicImform'
import MagicGather from'../components/MagicGather/MagicGather'

import MagicMap from'../components/MagicMap/MagicMap'

import MagicUserCom from'../components/MagicUserCom/MagicUserCom'
import MagicUserJob from'../components/MagicUserCom/MagicUserJob'
import MagicUserParty from'../components/MagicUserCom/MagicUserParty'
import MagicUserZai from'../components/MagicUserCom/MagicUserZai'

import MagicMonth from '../components/MagicAttendance/MagicMonth'
import MagicAttendance from '../components/MagicAttendance/MagicAttendance'
import MagicWeekly from '../components/MagicAttendance/MagicWeekly'
import MagicNote from '../components/mc/MagicNote'

import MagicTask from'../components/MagicTask/MagicTask'
import MagicGai from'../components/MagicTask/MagicGai'
import MagicMyTask from'../components/MagicTask/MagicMyTask'
import MagicCheckTask from'../components/MagicTask/MagicCheckTask'


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
        },
        {
          path:"MagicMenuType",
          component:MagicMenuType
        },
        {
          path:"MagicSystemType",
          component:MagicSystemType
        },
        {
          path:"MagicUser",
          component:MagicUser
        },
        {
          path:"MagicNotice",
          component:MagicNotice
        },
        {
          path:"MagicInform",
          component:MagicInform
        },
        {
          path:"MagicGather",
          component:MagicGather
        },
        {
          path:"MagicNewly",
          component:MagicNewly
        },
        {
          path:"MagicMap",
          component:MagicMap
        },
        {
          path:"MagicUserCom",
          component:MagicUserCom
        },
        {
          path:"MagicUserJob",
          component:MagicUserJob
        },
        {
          path:"MagicUserParty",
          component:MagicUserParty
        },
        {
          path:"MagicUserZai",
          component:MagicUserZai
        },
        {
          path:"MagicMonth",
          component:MagicMonth
        },
        {
          path:"MagicAttendance",
          component:MagicAttendance
        },
        {
          path:"MagicWeekly",
          component:MagicWeekly
        },
        {
          path:"MagicNote",
          component:MagicNote
        },
        {
          path:"MagicTask",
          component:MagicTask
        },
        {
          path:"MagicGai",
          component:MagicGai
        },
        {
          path:"MagicMyTask",
          component:MagicMyTask
        },
        {
          path:"MagicCheckTask",
          component:MagicCheckTask
        }
      ]
    },
    {
      path:"/MagicLogin",
      component:MagicLogin,
    },
  ],
  mode: "history" //作用是为了消除url中后面的/#/
})
