import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Expenses from "../views/Expenses.vue";
import Payments from "../views/Payments.vue";

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path:'/login', component: Login},
        {path: '/expenses', component: Expenses},
        {path: '/payments', component: Payments}
    ]
});

export default router;