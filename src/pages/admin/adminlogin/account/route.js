import LayoutAdmin from "@/layouts/LayoutAdmin";

const routes = [
    {
        path:'/admin/accounts',
        component:LayoutAdmin,
        name:'Account',
        meta:{
            title:'Account',
            icon:'team',
        },
        children:[
            {
                path:'list',
                component:()=>import('./List'),
                name:'AccountList',
                meta:{
                    title:'List'
                }
            },
            {
                path: 'create',
                component:()=>import('./Form'),
                name: 'AccountForm',
                meta: {
                    title: 'Create Account'
                }
            },
            {
                path: 'edit/:id',
                component:()=>import('./Form'),
                meta:{
                    title: 'Edit Account',
                    hidden:true
                }
            }
        ]
    }
]
export default routes;