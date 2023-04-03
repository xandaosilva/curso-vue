import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
// createWebHashHistory

const routes = [
    { path: "/home", component: Home },
    { path: "/login", component: Login }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
