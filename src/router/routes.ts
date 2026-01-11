import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Expenses from "../views/Expenses.vue";
import Payments from "../views/Payments.vue";
import Savings from "../views/Savings.vue";

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/login'},
        {path:'/login', component: Login},
        {path: '/expenses', component: Expenses},
        {path: '/payments', component: Payments},
        {path: '/savings', component: Savings}
    ]
});

export default router;