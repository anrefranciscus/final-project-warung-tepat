import Vue from "vue"
import VueRouter from "vue-router"
import HomePage from "../views/HomePage"
import LoginPage from "../views/LoginPage"
import AllProductSupplier from "../views/AllProductSupplier"
import DetailProductSupplier from "../views/DetailProductSupplier"
import AddNewProductSupplier from "../views/AddNewProductSupplier"
import DetailSupplier from "../views/DetailSupplier"

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
        meta: { requiresAuth: true }
    },
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: { requiresAuth: true }
    },
    {
        path: '/supplier/detail',
        name: 'profilesupplier',
        component: DetailSupplier,
        meta: {requiresAuth: true}
    },
    {
        path: '/all-product',
        name: 'allproduct',
        component: AllProductSupplier,
        meta: { requiresAuth: true }
    },
    {
        path: '/product/detail',
        name: "detailproduct",
        component: DetailProductSupplier,
        meta: { requiresAuth: true }
    },
    {
        path: '/add-product',
        name: 'addproduct',
        component: AddNewProductSupplier,
        meta: { requiresAuth: true }
    },
    {
        path: '/all-transaction',
        name: 'alltransaction',
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router