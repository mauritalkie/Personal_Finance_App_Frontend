import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Expenses from "../views/Expenses.vue";
import Payments from "../views/Payments.vue";
import Savings from "../views/Savings.vue";

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path:'/login', name: 'login', component: Login},
        {path: '/expenses', name: 'expenses', component: Expenses},
        {path: '/payments', name: 'payments', component: Payments},
        {path: '/savings', name: 'savings', component: Savings}
    ]
});

export default router;