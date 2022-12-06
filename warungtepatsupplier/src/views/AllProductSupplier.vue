<template>
    <div class="relative w-full p-8">
        <div class="flex flex-row justify-between px-2 py-4 my-5">
            <h3 class="text-2xl font-extrabold font-serif">List All Product</h3>
            <router-link to="/add-product" class="bg-cyan-700 hover:bg-cyan-800 hover:text-white p-2 rounded-full text-white font-bold py-4 px-4">Add Product</router-link>
        </div>
        <div v-for="product in getAllProductData" :key="product.id">
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
    }
}
</script>


<style scoped>
</style>
