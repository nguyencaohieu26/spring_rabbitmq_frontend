import LayoutAdmin from "@/layouts/LayoutAdmin";

const routes = [
    {
        path:'/admin/orders',
        component:LayoutAdmin,
        name:'Order',
        meta:{
            title:'Order',
            icon:'ordered-list'
        },
        children:[
            {
                path:'list',
                component:()=>import('./List'),
                name:'OrderList',
                meta:{
                    title:'List'
                }
            },
            {
                path:'detail/:id',
                component:()=>import('./Detail'),
                name:'OrderDetail',
                meta:{
                    title:'Detail',
                    hidden:true
                }
            }
        ]
    }
]
export default routes;