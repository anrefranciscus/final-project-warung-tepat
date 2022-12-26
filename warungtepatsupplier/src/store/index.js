import localforage from "localforage";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
//import router from "@/router";
//import SupplierServices from     "@/services/SupplierServices";

import {auth} from "./auth.module"
import { product } from "./product.module";
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: localforage,
    asyncStorage: true
});

// const store = new Vuex.Store({
//     state: {
//         userAuth: {
//             isLogin: false,
//             token: "",
//             idSupplier: ""
//         },
//         formLoginSupplier: {
//             nomorHandphone: "",
//             password: ""
//         },
//         formAddNewProductSupplier: {
//             namaProduk: "",
//             harga: "",
//             deskripsi: '',
//             gambar: "",
//             stok: "",
//             status: "",
//             idSupplier: "",
//         },
//         formUpdateProductSupplier: {
//             idProduk: "",
//             namaProduk: "",
//             harga: "",
//             deskripsi: "",
//             gambar: "",
//             stok: "",
//             status: "",
//             idSupplier: localStorage.getItem("id"),
//             kategori: ""
//         },
//         allProductSupplier: [],
//         allTransactionSupplier: [],
//         detailProductSupplier: {},
//         detailSupplier: {}
//     },
//     mutations: {
//         SET_USER_LOGIN(state, payload){
//             if(!state.userAuth.isLogin){
//                 state.userAuth.isLogin = true
//                 state.userAuth.token = payload.token
//                 state.userAuth.idSupplier = payload.idSupplier
//             }else if(state.userAuth.isLogin){
//                 state.userAuth.isLogin = false
//                 state.userAuth.token = payload.token
//                 state.userAuth.idSupplier = payload.idSupplier
//                 state.allProductSupplier = payload.allProductSupplier
//             }
//         },
//         SET_DETAIL_SUPPLIER(state, payload){
//             state.detailSupplier = payload
//         },
//         SET_ALL_PRODUCT_SUPPLIER(state, payload){
//             state.allProductSupplier = payload
//         },
//         SET_FORM_ADD_NEW_PRODUCT(state, payload){
//             state.formAddNewProductSupplier = payload
//         },
//         SET_FORM_UPDATE_PRODUCT_SUPPLIER(state, payload){
//             state.formUpdateProductSupplier = payload
//         },
//         SET_DETAIL_PRODUCT_SUPPLIER(state, payload){
//             state.detailProductSupplier = payload
//         },
//         ADD_NEW_PRODUCT_SUPPLIER(state, payload){
//             state.allProductSupplier.push(payload)
//         }
//     },
//     actions: {
//         loginSupplier({commit}, data){
//             SupplierServices.loginSupplier(data)
//             .then(({data, status}) => {
//                 if (status === 200 ){
//                     console.log(data)
//                     commit("SET_USER_LOGIN", {
//                         token: data.payload.token,
//                         idSupplier: data.payload.id
//                     })
//                     localStorage.setItem("token", data.payload.token)
//                     localStorage.setItem("idSupplier", data.payload.id)
//                     router.push("/")
//                 }
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         },
//         logOutSupplier({commit}){
//             localStorage.removeItem("token")
//             localStorage.removeItem("idSupplier")
//             commit("SET_USER_LOGIN", {
//                 token: "",
//                 idSupplier: ""
//             })
//             router.push("/login")
//         },
//         getAllProductSupplier({commit}){
//             SupplierServices.getAllProductSupplier()
//             .then(({data, status}) => {
//                 if(status === 200){
//                     commit("SET_ALL_PRODUCT_SUPPLIER", data)
//                     console.log("RESPONSE_GET_ALL_PRODUCT",data)
//                 }
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         },
//         getDetailProductSupplier({commit}, idProduk){
//             SupplierServices.getDetailProductSupplier(idProduk)
//             .then(({data, status}) => {
//                 if(status === 200 ){
//                     commit("SET_DETAIL_PRODUCT_SUPPLIER", data)
//                     console.log("RESPONSE_DETAIL_PRODUCT_BY_ID",data)
//                 }
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//         },
//         updateProductSupplier({commit, state}){
//             SupplierServices.updateProductSupplier(state.formUpdateProductSupplier)
//             .then(({status}) =>{
//                 console.log(status)
//             })
//             .catch(err => {
//                 console.log(err)
//             })

//             commit("SET_FORM_UPDATE_PRODUCT_SUPPLIER", {
//                 idProduk: "",
//                 namaProduk: "",
//                 harga: "",
//                 deskripsi: "",
//                 gambar: "",
//                 stok: "",
//                 status: "",
//                 idSupplier: "",
//                 kategori: ""
//             })
//         },
//         getDetailSupplier({commit}){
//             SupplierServices.getDetailSupplier(localStorage.getItem("idSupplier"))
//             .then(({data, status}) => {
//                 if (status === 200){
//                     commit("SET_DETAIL_SUPPLIER", data)
//                     console.log("DETAIL SUPPLIER",data)
//                     console.log(localStorage.getItem("idSupplier"))
//                 }
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//         }
//     },
//     getters: {
//         getUserLogin(state){
//             return state.userAuth
//         },
//         getAllProductData(state){
//             return state.allProductSupplier
//         },
//         getDetailProductData(state){
//             return state.detailProductSupplier
//         },
//         getDetailSupplierData(state){
//             return state.detailSupplier
//         }
//     },
//     plugins: [vuexLocal.plugin]
// });

// export default store;

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        product
    },
    plugins: [vuexLocal.plugin]
})
