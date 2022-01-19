import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/clients/Home";
import About from "@/pages/clients/About";
import Contact from "@/pages/clients/Contact";
import Blog from "@/pages/clients/Blogs/Blog";
Vue.use(VueRouter);

const routes = [
        {
            path:'/',
            name:'home',
            component:Home,
            meta:{
                title:'Home'
            }
        },
        {
            path: '/products',
            name:'products',
            component: ()=>import('../pages/clients/Products'),
            meta: {
                title: 'Products'
            }
        },
        {
            path: '/about',
            name:'about',
            component: About,
            meta: {
                title: 'About'
            }
        },
        {
            path: '/contact',
            name:'contact',
            component: Contact,
            meta:{
                title: 'Contact'
            }
        },
        {
            path: '/blog',
            name: 'blogs',
            component:Blog,
            meta: {
                title: 'Blogs'
            },
            children:[
                {
                    path:'blogs/:id',
                    component:()=>import('../pages/clients/Blogs/BlogItem'),
                    name:'blog_item',
                    meta:{
                        title:'BlogItem'
                    }
                }
            ]
        }
    ];
//how to manage the routing history in our app
//when user click somewhere go to different page -> the new page is adding to browsing history
const router = new VueRouter({
    mode:'history',
    routes
})
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    next();
})
export default router