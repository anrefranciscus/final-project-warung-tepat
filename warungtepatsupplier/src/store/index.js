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
            id: 0
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
        allProductSupplier: []
    },
    mutations: {
        SET_USER_LOGIN(state, payload){
            if(!state.userAuth.isLogin){
                state.userAuth.isLogin = true
                state.userAuth.token = payload.token
                state.userAuth.id = payload.id
            }else if(state.payload.isLogin){
                state.userAuth.isLogin = false
                state.userAuth.token = payload.token
                state.userAuth.id = payload.id
                state.allProductSupplier = payload.allProductSupplier
            }
        },
        SET_ALL_PRODUCT_SUPPLIER(state, payload){
            state.allProductSupplier = payload
        },
        SET_FORM_ADD_NEW_PRODUCT(state, payload){
            state.formAddNewProductSupplier = payload
        }
    },
    actions: {
        loginSupplier({commit}, data){
            axios.post(`${baseUrlAPI}/login`, data)
            .then(({data, status}) => {
                if (status === 200 ){
                    commit("SET_USER_LOGIN", {
                        token: data.payload.token,
                        id: data.payload.id
                    })
                    localStorage.setItem("token", data.payload.token)
                    localStorage.setItem("id", data.payload.id)
                    console.log("data")
                    router.push("/")
                }
            })
        },
        getAllProductSupplier({commit}){
            axios.get(`${baseUrlAPI}/produk`, {
              headers: {
                Authorization: `Bearer ${token}`
              }  
            })
            .then(({data}) => {
                commit("SET_ALL_PRODUCT_SUPPLIER", data)
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
        }
    },
    plugins: [vuexLocal.plugin]
});

export default store;