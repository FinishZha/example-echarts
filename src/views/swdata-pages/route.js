export default [
    {
        path:'/',
        children:[
            {
                path:'/data-resource',
                name:'date-Resource',
                components: ()=>import('@/views/swdata-pages/index'),
                mete:{
                    title:'数据资源'
                }
            }
        ]
    }
]
