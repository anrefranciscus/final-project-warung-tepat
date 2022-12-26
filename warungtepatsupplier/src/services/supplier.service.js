import baseUrlAPI from "@/api"
import axios from "axios"
import AuthHeader from "./auth-header"

class SupplierServices {
    // loginSupplier(data){
    //     return api.post("/login", data)
    // }
    getDetailSupplier(idSupplier){
        return axios.get(`${baseUrlAPI}/supplier/${idSupplier}`, {headers: AuthHeader()})
    }
    
    allProduct() {
        return axios.get(`${baseUrlAPI}/produk`, {headers: AuthHeader()})
    }

    detailProduct(idProduk) {
        return axios.get(`${baseUrlAPI}/produk/${idProduk}`, {headers: AuthHeader()})
    }

    // updateProductSupplier(formProduct){
    //     return axios.put(`${baseUrlAPI}/produk`, formProduct, )
    //     return api.put(`/produk`, formProduct)
    // }
}


export default new SupplierServices();