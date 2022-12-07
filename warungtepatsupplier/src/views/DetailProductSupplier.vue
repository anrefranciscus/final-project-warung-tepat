<template>
    <div class="pl-5 pr-14 w-full">
        <div class="flex flex-col mt-4">
            <div class="flex flex-row justify-between mb-10">
                <h1 class="font-semibold text-xl">Detail Product</h1>
                <router-link to="/product/update">
                    <button @click="getDataProduct"
                        class="p-2 rounded-md font-normal text-base text-white bg-cyan-700 hover:bg-cyan-800">
                        <font-awesome-icon icon="fa-solid fa-wrench" class="mr-1" />
                        Update Product
                    </button>
                </router-link>
            </div>
            <div class="w-full">
                <div class="mb-2 ">
                    <span>Nama Produk</span>
                    <h1 class="font-semibold text-lg">
                        {{ getDetailProductData.namaProduk }}
                    </h1>
                </div>
                <div class="mb-2 ">
                    <span>Deskripsi Produk</span>
                    <h1 class="font-semibold text-lg">
                        {{ getDetailProductData.deskripsi }}
                    </h1>
                </div>
                <div class="mb-2 ">
                    <span>Gambar Produk</span>
                    <img :src="getDetailProductData.gambar" alt="image product" />
                </div>
                <div class="mb-2 ">
                    <span>Harga Produk</span>
                    <h1 class="font-semibold text-lg">
                        {{new Intl.NumberFormat("id", {
                            style: "currency",
                            currency: "IDR"
                        }).format(getDetailProductData.harga)
                    }}</h1>
                </div>
                <div class="mb-2 ">
                    <span>Stok Produk</span>
                    <h1 class="font-semibold text-lg">
                        {{ getDetailProductData.stok }}
                    </h1>
                </div>
                <div class="mb-2 ">
                    <span>Status</span>
                    <h1 class="font-semibold text-lg">
                        {{ (getDetailProductData.status === true ? "Dijual" : "Tidak Dijual") }}
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "DetailProductSupplier",
    computed: {
        ...mapGetters(["getDetailProductData"])
    },
    methods: {
        getDataProduct() {
            this.$store.commit("SET_FORM_UPDATE_PRODUCT_SUPPLIER", {
                idProduk: this.getDetailProductData.id,
                namaProduk: this.getDetailProductData.namaProduk,
                harga: this.getDetailProductData.harga,
                deskripsi: this.getDetailProductData.deskripsi,
                gambar: this.getDetailProductData.gambar,
                stok: this.getDetailProductData.stok,
                status: this.getDetailProductData.status,
                idSupplier: this.getDetailProductData.idSupplier,
                kategori: this.getDetailProductData.kategori
            })
        }
    }
}
</script>


<style scoped>

</style>
