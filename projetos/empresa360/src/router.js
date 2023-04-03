import { createRouter, createWebHistory } from 'vue-router';

// Components
import Contracts from '@/components/sellers/Contracts.vue';
import Home from '@/views/Home.vue';
import Leads from '@/components/sellers/Leads.vue';
import Login from '@/views/Login.vue';
import Sellers from '@/components/sellers/Sellers.vue';
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
                    { path: "contracts", component: Contracts }
                ]
            },
            { path: "services", component: Services }
        ] 
    },
    { path: "/login", component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
