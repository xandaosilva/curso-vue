import { createRouter, createWebHistory } from 'vue-router';

// Components
import Contracts from '@/components/sellers/Contracts.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import Home from '@/views/Home.vue';
import Lead from '@/components/sellers/Lead.vue';
import Leads from '@/components/sellers/Leads.vue';
import Login from '@/views/Login.vue';
import Sellers from '@/components/sellers/Sellers.vue';
import SellersDefault from '@/components/sellers/SellersDefault.vue';
import Services from '@/components/services/Services.vue';
import Site from '@/views/Site.vue';
// createWebHashHistory

const routes = [
    { path: "/", component: Site },
    { 
        path: "/home", 
        component: Home,
        children: [
            { path: "sellers", component: Sellers, children:
                [
                    { path: "leads", component: Leads },
                    { path: "leads/:id", component: Lead },
                    { path: "contracts", component: Contracts, name: "contracts" },
                    { path: "", component: SellersDefault }
                ]
            },
            { path: "services", component: Services, name: "services" },
            { path: "dashboard", component: Dashboard }
        ] 
    },
    { path: "/login", component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
