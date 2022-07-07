export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path:'/home',
        name:'Home',
        component: ()=>import('@/views/common/Home'),
        meat:{
            title:'首页'
        }
    },
    {
        path:'/about',
        name:'About',
        component:()=>import('@/views/common/About'),
        meat:{
            title: '关于本网站'
        }
    },
    {
        path: '/404',
        name:'NotFound',
        component:()=>import('@/views/common/404'),
        methods:{
            title:'页面找不到...'
        }
    },
    {
        path: '*',
        redirect:'/404'
    }
]
