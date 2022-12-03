//import axios from "axios";
import localforage from "localforage";
//import baseUrlAPI from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: localforage,
    asyncStorage: true
});

//let token = localforage.getItem("token");

const store = new Vuex.Store({
    state: {
        userAuth: {
            isLogin: false,
            token: "",
            id: 0
        }
    },
    mutations: {},
    actions: {},
    getters: {},
    plugins: [vuexLocal.plugin]
});

export default store;