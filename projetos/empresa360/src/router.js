import { createRouter, createWebHistory } from 'vue-router';

// Components
// Lazy loading
const Contracts = () =>  import(/* webpackChunkName: "sellers" */ '@/components/sellers/Contracts.vue');
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/Dashboard.vue');
const DashboardFooter = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/DashboardFooter.vue');
const Home = () => import('@/views/Home.vue');
const Indicators = () => import(/* webpackChunkName: "services" */ '@/components/services/Indicators.vue');
const Lead = () => import(/* webpackChunkName: "sellers" */ '@/components/sellers/Lead.vue');
const Leads = () => import(/* webpackChunkName: "sellers" */ '@/components/sellers/Leads.vue');
const Login = () => import('@/views/Login.vue');
const PageNotFound = () => import('@/views/PageNotFound.vue');
const Options = () => import(/* webpackChunkName: "services" */ '@/components/services/Options.vue');
const Sellers = () => import(/* webpackChunkName: "sellers" */ '@/components/sellers/Sellers.vue');
const SellersDefault = () => import(/* webpackChunkName: "sellers" */ '@/components/sellers/SellersDefault.vue');
const Service = () => import(/* webpackChunkName: "services" */ '@/components/services/Service.vue');
const Services = () => import(/* webpackChunkName: "services" */ '@/components/services/Services.vue');
const Site = () => import('@/views/Site.vue');
// createWebHashHistory

const routes = [
    { 
        path: "/",
        component: Site,
        meta: { 
            requireAuth: false 
        }
    },
    { 
        path: "/home", 
        component: Home,
        meta: {
            requireAuth: true
        },
        alias: "/app",
        children: [
            { 
                path: "sellers",
                component: Sellers,
                children: [
                    { 
                        path: "leads",
                        component: Leads,
                        name: "leads",
                        beforeEnter(){
                            console.log("Guarde de rota beforeEnter");
                        } 
                    },
                    { 
                        path: "leads/:id/:otherParam",
                        props: true,
                        // props: {
                        //     id: 5,
                        //     otherParam: "pt-br"
                        // },
                        // props: () => {
                        //     return {
                        //         id: 3,
                        //         otherParam: "en"
                        //     }
                        // },
                        component: Lead,
                        name: "lead",
                        alias: "/l/:id/:otherParam" 
                    },
                    { 
                        path: "contracts",
                        component: Contracts,
                        name: "contracts"
                    },
                    { 
                        path: "",
                        component: SellersDefault,
                        name: "sellers",
                    }
                ]
            },
            { 
                path: "services",
                component: Services,
                name: "services",
                children: [
                    { 
                        path: ":id",
                        props: {
                            default: true,
                            options: true,
                            indicators: true
                        },
                        alias: "/s/:id",
                        components: {
                            default: Service,
                            options: Options,
                            indicators: Indicators
                        },
                        name: "service"
                    }
                ] 
            },
            { 
                path: "dashboard", 
                components: {
                    default: Dashboard,
                    footer: DashboardFooter
                } 
            }
        ] 
    },
    { 
        path: "/login",
        component: Login,
        meta:{
            requireAuth: false
        }
    },
    {
        path: "/redirects-1",
        redirect: "/home/services"
    },
    {
        path: "/redirects-2",
        redirect: { 
            name: "leads"
        }
    },
    {
        path: "/redirects-3",
        redirect: "/home/sellers"
    },
    {
        path: "/redirects-4",
        redirect: { 
            name: "sellers"
        }
    },
    {
        path: "/redirects-5",
        redirect: to => {
            console.log(to);
            return { name: "sellers" }
        }
    },
    {
        path: "/:catchAll(.*)*",
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to){
        if(to.hash){
            return { el: to.hash }
        }
        return { left:0, top: 0 }
    },
    routes: routes
});

router.beforeEach(() => {
    console.log("Guard global beforeEach");
});

router.afterEach(() => {
    console.log("Guarda global afterEach.");
});

router.beforeResolve(() => {
    console.log("Guarda global beforeResolve.");
});

export default router;
