import axios from "axios";
import localforage from "localforage";
import baseUrlAPI from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import router from "@/router";


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: localforage,
    asyncStorage: true
});

let token = localStorage.getItem("token")

const store = new Vuex.Store({
    state: {
        userAuth: {
            isLogin: false,
            token: "",
            idSupplier: ""
        },
        formLoginSupplier: {
            nomorHandphone: "",
            password: ""
        },
        formAddNewProductSupplier: {
            namaProduk: "",
            harga: "",
            deskripsi: '',
            gambar: "",
            stok: "",
            status: "",
            idSupplier: localStorage.getItem("id"),
        },
        formUpdateProductSupplier: {
            idProduk: "",
            namaProduk: "",
            harga: "",
            deskripsi: "",
            gambar: "",
            stok: "",
            status: "",
            idSupplier: localStorage.getItem("id"),
            kategori: ""
        },
        allProductSupplier: [],
        allTransactionSupplier: [],
        detailProductSupplier: {},
        detailSupplier: {}
    },
    mutations: {
        SET_USER_LOGIN(state, payload){
            if(!state.userAuth.isLogin){
                state.userAuth.isLogin = true
                state.userAuth.token = payload.token
                state.userAuth.idSupplier = payload.idSupplier
            }else if(state.userAuth.isLogin){
                state.userAuth.isLogin = false
                state.userAuth.token = payload.token
                state.userAuth.idSupplier = payload.idSupplier
                state.allProductSupplier = payload.allProductSupplier
            }
        },
        SET_DETAIL_SUPPLIER(state, payload){
            state.detailSupplier = payload
        },
        SET_ALL_PRODUCT_SUPPLIER(state, payload){
            state.allProductSupplier = payload
        },
        SET_FORM_ADD_NEW_PRODUCT(state, payload){
            state.formAddNewProductSupplier = payload
        },
        SET_FORM_UPDATE_PRODUCT_SUPPLIER(state, payload){
            state.formUpdateProductSupplier = payload
        },
        SET_DETAIL_PRODUCT_SUPPLIER(state, payload){
            state.detailProductSupplier = payload
        },
        ADD_NEW_PRODUCT_SUPPLIER(state, payload){
            state.allProductSupplier.push(payload)
        }
    },
    actions: {
        loginSupplier({commit}, data){
            axios.post(`${baseUrlAPI}/login`, data)
            .then(({data, status}) => {
                if (status === 200 ){
                    commit("SET_USER_LOGIN", {
                        token: data.payload.token,
                        idSupplier: data.payload.id
                    })
                    localStorage.setItem("token", data.payload.token)
                    localStorage.setItem("idSupplier", data.payload.id)
                    console.log("data")
                    router.push("/")
                }
            })
        },
        logOutSupplier({commit}){
            localStorage.removeItem("token")
            localStorage.removeItem("idSupplier")
            commit("SET_USER_LOGIN", {
                token: "",
                idSupplier: ""
            })
            router.push("/login")
        },
        getAllProductSupplier({commit}){
            axios.get(`${baseUrlAPI}/produk`, {
              headers: {
                Authorization: `Bearer ${token}`
              }  
            })
            .then(({data, status}) => {
                if(status === 200){
                    commit("SET_ALL_PRODUCT_SUPPLIER", data) 
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        getDetailProductSupplier({commit}, idProduk){
            axios.get(`${baseUrlAPI}/produk/${idProduk}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(({data}) =>{
                commit("SET_DETAIL_PRODUCT_SUPPLIER", data)
            })
            .catch(err => {
                console.log(err)
            })
        },
        getDetailSupplier({commit}){
            axios.get(`${baseUrlAPI}/supplier/${localStorage.getItem("idSupplier")}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(({data}) => {
                commit("SET_DETAIL_SUPPLIER", data)
                console.log(data)
                console.log(token)
                console.log(localStorage.getItem("idSupplier"))
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    getters: {
        getUserLogin(state){
            return state.userAuth
        },
        getAllProductData(state){
            return state.allProductSupplier
        },
        getDetailProductData(state){
            return state.detailProductSupplier
        },
        getDetailSupplierData(state){
            return state.detailSupplier
        }
    },
    plugins: [vuexLocal.plugin]
});

export default store;