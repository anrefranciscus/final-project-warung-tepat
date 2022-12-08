<template>
    <div class="pl-5 pr-14">
        <div class="mt-4">
            <h1 class="font-semibold text-xl">Update Product</h1>
        </div>
        <div class="mt-6">
            <form @submit.prevent="submitUpdateProduct">
                <div class="grid grid-cols-2 gap-4">
                    <div class="mb-2 mr-4">
                        <p class="mb-1 text-base">Nama Produk</p>
                        <input type="text" class="ml-[3px] rounded-sm p-[2px] w-full outline" name="namaProduk" v-model="formUpdateProductSupplier.namaProduk">
                    </div>
                    <div class="mb-2">
                        <p class="mb-1 text-base">Nama Produk</p>
                        <input type="text" class="ml-[3px] rounded-sm p-[2px] w-full outline" name="namaProduk" v-model="formUpdateProductSupplier.namaProduk">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateProductSupplier",
    computed: {
        formUpdateProductSupplier(){
            return this.$store.state.formUpdateProductSupplier
        }
    },
    methods: {
        submitUpdateProduct(){
            this.$store.dispatch("updateProduct")
            this.$router.push("/all-product")
        }
    }
}
</script>


<style scoped>
</style>
