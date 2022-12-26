import SupplierService from "@/services/supplier.service";

const initialProduct = {
    allProductSupplier: [],
    detailProductSupplier: {},
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
}
export const product = {
    namepaced: true,
    state: initialProduct,
    actions: {
        getAllProductSupplier({commit}){
            return SupplierService.allProduct().then(
                product => {
                    commit("SET_ALL_PRODUCT", product.data)
                    console.log(product.data)
                    return Promise.resolve(product)
                },
                error => {
                    commit("SET_ALL_PRODUCT_FAILURE")
                    return Promise.reject(error)
                }
            )
        },
        getDetailProductSupplier({commit}, idProduk){
            return SupplierService.detailProduct(idProduk).then(
                detail => {
                    commit("SET_DETAIL_PRODUCT", detail.data)
                    console.log(detail)
                    return Promise.resolve(detail)
                },
                error => {
                    commit("SET_DETAIL_FAILURE")
                    return Promise.reject(error)
                }
            )
        }
    },
    mutations: {
        SET_ALL_PRODUCT(state, payload){
            state.allProductSupplier = payload
        },
        SET_ALL_PRODUCT_FAILURE(state){
            state.allProductSupplier = null
        },
        SET_DETAIL_PRODUCT(state, payload){
            state.detailProductSupplier = payload
        },
        SET_DETAIL_PRODUCT_FAILURE(state){
            state.detailProductSupplier = null
        },
        SET_FORM_UPDATE_PRODUCT_SUPPLIER(state, payload){
            state.formUpdateProductSupplier = payload
        }
    },
    getters: {
        getAllProductData(state){
            return state.allProductSupplier
        },
        getDetailProductData(state){
            return state.detailProductSupplier
        }
    }
    
}