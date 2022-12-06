<template>
    <div class="relative w-full p-8">
        <div class="flex flex-row justify-between px-2 py-4 my-5">
            <h3 class="text-2xl font-extrabold font-serif">List All Product</h3>
            <router-link to="/add-product">
                <button class="p-2 rounded-md font-normal text-base text-white bg-cyan-700 hover:bg-cyan-400">
                    Add New Product
                </button>
            </router-link>
        </div>
        <div @click="goToDetailProductSupplier(product.idProduk)" v-for="product in getAllProductData" :key="product.idProduct">
            <ListProduct :product="product"/>
        </div>
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
