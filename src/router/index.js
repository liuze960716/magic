import Vue from 'vue'
import Router from 'vue-router'
import MagicCommon from '../page/MagicCommon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MagicCommon',
      component: MagicCommon
    }
  ],
  mode: "history" //作用是为了消除url中后面的/#/
})
