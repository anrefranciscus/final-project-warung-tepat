<template>
    <div class="relative w-full p-8">
        <div class="flex flex-row justify-between px-2 py-4 my-5">
            <h3 class="text-2xl font-extrabold font-serif">List All Product</h3>
            <router-link to="/add-product">
                <button class="p-2 rounded-md font-normal text-base text-white bg-cyan-700 hover:bg-cyan-800">
                    Add New Product
                </button>
            </router-link>
        </div>
        <table class="w-full border-b border-gray-200">
            <thead>
                <tr class="text-sm font-medium text-gray-700 border-b border-gray-200">
                    <td class="py-4 px-4 text-start">
                        Gambar Produk
                    </td>
                    <td class="py-4 px-4 text-left">
                        Nama Produk
                    </td>
                    <td class="py-4 px-4 text-center">Harga</td>
                    <td class="py-4 px-4 text-center">Stok</td>
                    <td class="py-4 px-4 text-center">Dibuat</td>
                </tr>
            </thead>
            <tbody @click="goToDetailProductSupplier(product.idProduk)" v-for="product in getAllProductData" :key="product.idProduct">
                <ListProduct :product="product"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import ListProduct from '@/components/ListProduct.vue';
import { mapGetters } from 'vuex';

export default {
    name: "AllProductSupplier",
    components: {ListProduct},
    computed: {
        ...mapGetters(['getAllProductData']) 
    },
    created(){
        this.$store.dispatch("getAllProductSupplier")
    },
    methods: {
        goToDetailProductSupplier(idProduk){
            this.$router.push("/product/detail")
            this.$store.dispatch("getDetailProductSupplier", idProduk)
        }
    }
}
</script>


<style scoped>
</style>
