import { createRouter, createWebHistory } from 'vue-router';

// Components
import Contracts from '@/components/sellers/Contracts.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import DashboardFooter from '@/components/dashboard/DashboardFooter.vue';
import Home from '@/views/Home.vue';
import Indicators from '@/components/services/Indicators.vue';
import Lead from '@/components/sellers/Lead.vue';
import Leads from '@/components/sellers/Leads.vue';
import Login from '@/views/Login.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import Options from '@/components/services/Options.vue';
import Sellers from '@/components/sellers/Sellers.vue';
import SellersDefault from '@/components/sellers/SellersDefault.vue';
import Service from '@/components/services/Service.vue';
import Services from '@/components/services/Services.vue';
import Site from '@/views/Site.vue';
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
