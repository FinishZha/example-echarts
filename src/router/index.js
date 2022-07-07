import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import globalRoute from '@/views/common/index'  //基本页面路由

let routes = []
routes = [
    ...globalRoute //本路由集必须放在最后，以便于适配404页面
]

const router = new VueRouter({
    mode: 'history',
    base:'/',
    routes
})

export default router
