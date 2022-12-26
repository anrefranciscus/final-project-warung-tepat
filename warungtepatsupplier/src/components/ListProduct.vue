<template>
    <!-- <div class="bg-[#FAFAFA] border flex flex-row justify-between items-center mb-3 px-6 py-2 rounded w-full hover:bg-[#D1D1D1]"> 
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
        </div> -->
 <!-- </div> -->
    <tr class="hover:bg-gray-100 transition-colors group">
        <td class="py-4 px-4">
            <img :src="product.gambar" alt="" class="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200">
        </td>
        <td class="py-4 px-4 ">
            <h1 class="text-lg font-semibold text-gray-700">{{product.namaProduk}}</h1>
            <div class="font-medium text-gray-400">{{product.kategori}}</div>
        </td>
        <td class="py-4 px-4 font-medium text-center">
            {{new Intl.NumberFormat("id", {
                style: "currency",
            currency: "IDR"}).format(product.harga)}}
        </td>
        <td class="py-4 px-4 font-medium text-center">
            {{product.stok}}
        </td>
        <td class="py-4 px-4 font-medium text-center">
            {{product.createdAt}}
        </td>
    </tr>

</template>

<script>
export default {
    name: "ListProduct",
    props: ['product']
}
</script>

<style scoped>
</style>
