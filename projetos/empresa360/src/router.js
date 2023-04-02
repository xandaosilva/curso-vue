import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

const routes = [
    { path: "/home", component: Home },
    { path: "/login", component: Login }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;
