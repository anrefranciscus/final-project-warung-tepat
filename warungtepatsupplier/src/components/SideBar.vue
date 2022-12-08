<template>
    <div :class=" routeName !== 'login' ? 'bg-cyan-700 border-r border-[#D1D1D1] fixed w-56 h-full' : 'hidden' ">
        <div class="px-5 my-5">
            <h1 class="font-semibold text-2xl">Warung Tepat</h1>
            <h1 class="text-base">Halo, {{getDetailSupplierData.email}}</h1>
            <h1 class="text-white text-sm">HALO</h1>
        </div>
        <div class="mt-8 pl-2">
            <router-link to="/">
                <div :class="routeName == 'home' ? 'mb-2 border-l-4 border-cyan-500 rounded-l w-full bg-cyan-800 hover:rounded' : 'mb-2 w-full hover:bg-cyan-800 hover:rounded'   ">
                    <div class="text-gray-200 px-3 py-2 text-[15px] font-bold">
                        <div class="inline w-full mr-2">
                            <font-awesome-icon
                            :icon="iconFaHouse"
                            :class=" routeName == 'home' ? 'text-[#FF8000]' : 'text-gray-200'  "/>
                        </div>
                        <span :class=" routeName == 'home' ? 'text-[#FF8000]' : 'text-gray-200' ">Home</span>
                    </div>                    
                </div>
            </router-link>
            <div @click="goToDetailSupplier">
                <div :class="routeName == 'profilesupplier' ? 'mb-2 border-l-4 border-cyan-500 rounded-l w-full bg-cyan-800 hover:rounded' : 'mb-2 w-full hover:bg-cyan-800 hover:rounded' ">
                    <div class="text-gray-200 px-3 py-2 text-[15px] font-bold">
                        <div class="inline w-full mr-2">
                            <font-awesome-icon
                            :icon="iconFaUser"
                            :class=" routeName == 'profilesupplier' ? 'text-gray-200' : 'text-gray-200'  "/>
                        </div>
                        <span :class=" routeName == 'profileSupplier' ? 'text-gray-200' : 'text-gray-200'  ">Profile Supplier</span>
                    </div>                    
                </div>
            </div>
            <router-link to="/all-product">
                <div :class="routeName == 'allproduct' ? 'mb-2 border-l-4 border-cyan-500 rounded-l w-full bg-cyan-800 hover:rounded' : 'mb-2 w-full hover:bg-cyan-800 hover:rounded' ">
                    <div class="text-gray-200 px-3 py-2 text-[15px] font-bold">
                        <div class="inline w-full mr-2">
                            <font-awesome-icon
                            :icon="iconCartShopping"
                            :class=" routeName == 'allproduct' ? 'text-gray-200' : 'text-gray-200'  "/>
                        </div>
                        <span :class=" routeName == 'allproduct' ? 'text-gray-200' : 'text-gray-200' ">All Product</span>
                    </div>                    
                </div>
            </router-link>
            <router-link to="/transaction">
                <div :class="routeName == 'alltransaction' ? 'mb-2 border-l-4 border-cyan-500 rounded-l w-full bg-cyan-800 hover:rounded' : 'mb-2 w-full hover:bg-cyan-800 hover:rounded' ">
                    <div class="text-gray-200 px-3 py-2 text-[15px] font-bold">
                        <div class="inline w-full mr-2">
                            <font-awesome-icon
                            :icon="iconFaMoneyBill"
                            :class=" routeName == 'alltransaction' ? 'text-gray-200' : 'text-gray-200'  "/>
                        </div>
                        <span :class=" routeName == 'alltransaction' ? 'text-gray-200' : 'text-gray-200' ">All Transaction</span>
                    </div>                    
                </div>
            </router-link>
            <hr class="my-6 border-gray-200 dark:border-gray-600" />
            <div class="mb-2 w-full hover:bg-cyan-800 hover:rounded" @click="logoutSupplier">
                <div class="text-gray-200 px-3 py-2 text-[15px] font-bold">
                    <div class="inline w-full">
                        <font-awesome-icon
                        :icon="iconFaRightFromBracket"
                        />
                    </div>
                    <span class="ml-[11px] hover:text-[#]">Logout</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    faHouse,
    faRightFromBracket,
    faUser,
    faCartShopping,
    faMoneyBill
} from "@fortawesome/free-solid-svg-icons"
import { mapGetters } from "vuex"
export default {
    name: 'SideBar',
    props: ["routeName"],
    computed: {
        ...mapGetters(['getDetailSupplierData']),
        currentRouteName() {
            return this.$route.name
        },
        iconFaHouse(){
            return faHouse
        },
        iconFaUser(){
            return faUser
        },
        iconFaRightFromBracket(){
            return faRightFromBracket
        },
        iconCartShopping(){
            return faCartShopping
        },
        iconFaMoneyBill(){
            return faMoneyBill
        }
    },
    methods: {
        logoutSupplier(){
            this.$store.dispatch("logOutSupplier")
        },
        goToDetailSupplier(){
            this.$router.push("/supplier/detail")
            this.$store.dispatch("getDetailSupplier", localStorage.getItem("idSupplier"))
        }
    }
}
</script>


<style scoped>

</style>
