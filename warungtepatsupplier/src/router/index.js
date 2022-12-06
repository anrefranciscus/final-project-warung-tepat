import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "../views/HomePage"
import LoginPage from "../views/LoginPage"
import AllProductSupplier from "../views/AllProductSupplier"
import DetailProductSupplier from "../views/DetailProductSupplier"
import AddNewProductSupplier from "../views/AddNewProductSupplier"

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
        component: LoginPage,
        meta: { requireAuth: true }
    },
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: { requireAuth: true }
    },
    {
        path: '/all-product',
        name: 'allproduct',
        component: AllProductSupplier,
        meta: { requireAuth: true }
    },
    {
        path: '/product/detail',
        name: "detailproduct",
        component: DetailProductSupplier,
        meta: { requireAuth: true }
    },
    {
        path: '/add-product',
        name: 'addproduct',
        component: AddNewProductSupplier,
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