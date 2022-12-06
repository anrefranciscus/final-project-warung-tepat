<template>
    <div class="bg-[#FAFAFA] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]"> 
        <div class="w-1/3">
            <h1 class="text-lg font-semibold">{{product.namaProduk}}</h1>
            <span class="text-base text-gray-800">{{
             new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR"
             }).format(product.harga)
            }}</span>
        </div>
        <div class="text-center w-1/3">
            <h1 class="text-lg font-semibold">{{product.deskripsi}}</h1>
        </div>
        <div class="text-end w-1/3">
            <h1 class="text-sm font-semibold">{{product.stok}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListProduct",
    props: ['product']
}
</script>

<style scoped>
</style>
