<!-- <template>
    <div class="pl-5 pr-14 w-full">
        <div class="flex flex-col mt-4">
            <div class="flex flex-row justify-between mb-10">
                <h1 class="font-semibold text-xl">Detail Profile Supplier</h1>
                <router-link to="/product/update">
                    <button  class="p-2 rounded-md font-normal text-base text-white  bg-cyan-700 hover:bg-cyan-800">
                        <font-awesome-icon icon="fa-solid fa-wrench" class="mr-1" />
                        Update Profile
                    </button>
                </router-link>
            </div>
            <div class="w-full">
                <div class="mb-2 ">
                    <span>Nama Supplier</span>
                    <h1 class="font-semibold text-lg">
                        {{getDetailSupplierData.namaSupplier}}
                    </h1>
                </div>
                <div class="mb-2 ">
                    <span>Email Supplier</span>
                    <h1 class="font-semibold text-lg">
                        {{getDetailSupplierData.email}}
                    </h1>
                </div>
                <div class="mb-2 ">
                    <span>Nomor Telepon Supplier</span>
                    <h1 class="font-semibold text-lg">
                        {{getDetailSupplierData.nomorHandphone}}
                    </h1>
                </div>
                <div class="mb-2 ">
                    <span>Saldo</span>
                    <h1 class="font-semibold text-lg">
                        {{new Intl.NumberFormat("id", {
                            style: "currency",
                            currency: "IDR"
                        }).format(getDetailSupplierData.harga === 0.0 ? "" : "")
                    }}</h1>
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
        ...mapGetters(["getDetailSupplierData"])
    }
}
</script>


<style scoped>
</style> -->
