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
import Options from '@/components/services/Options.vue';
import Sellers from '@/components/sellers/Sellers.vue';
import SellersDefault from '@/components/sellers/SellersDefault.vue';
import Service from '@/components/services/Service.vue';
import Services from '@/components/services/Services.vue';
import Site from '@/views/Site.vue';
// createWebHashHistory

const routes = [
    { path: "/", component: Site },
    { 
        path: "/home", 
        component: Home,
        alias: "/app",
        children: [
            { path: "sellers", component: Sellers, children:
                [
                    { path: "leads", component: Leads, name: "leads" },
                    { path: "leads/:id", component: Lead, name: "lead", alias: "/l/:id" },
                    { path: "contracts", component: Contracts, name: "contracts" },
                    { path: "", component: SellersDefault }
                ]
            },
            { path: "services", component: Services, name: "services", children: 
                [
                    { 
                        path: ":id",
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
            { path: "dashboard", components: 
                {
                    default: Dashboard,
                    footer: DashboardFooter
                } 
            }
        ] 
    },
    { path: "/login", component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
