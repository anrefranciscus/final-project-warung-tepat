import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        name: 'register',
        meta: { requireAuth: true }
    },
    {
        path: '/login',
        name: 'login',
        meta: { requireAuth: true }
    },
    {
        path: '/',
        name: 'home',
        meta: { requireAuth: true }
    },
    {
        path: '/all-product',
        name: 'allproduct',
    },
    {
        path: '/product/:id',
        name: "detailproduct",
        meta: { requireAuth: true }
    },
    {
        path: '/add-product',
        name: 'addproduct',
        meta: { requireAuth: true }
    },
    {
        path: '/all-transaction',
        name: 'alltransaction',
        meta: { requireAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router