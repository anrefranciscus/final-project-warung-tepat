<template>
    <div class="bg-white dark:bg-gray-900 flex justify-center">
        <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form class="w-full max-w-md" @submit.prevent="handleLogin">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize dark:text-white">Login</h1>

                <div class="relative flex items-center mt-8">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    <input type="text"
                        class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Phone number" 
                        v-model="user.nomorHandphone">
                </div>

                <div class="relative flex items-center mt-4">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>

                    <input type="password"
                        class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Password"
                        v-model="user.password">
                </div>

                <div class="mt-6">
                    <button
                        class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign in
                    </button>

                    <div class="mt-6 text-center ">
                        <a href="#" class="text-sm text-blue-500 hover:underline dark:text-blue-400">
                            Don’t have an account yet? Sign up
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import User from '@/models/user';

export default {
    name: "LoginPage",
    // data(){
    //     return {
    //         formLoginSupplier: {
    //             nomorHandphone: "",
    //             password: ""
    //         }
    //     }
    // },
    // methods: {
    //     loginSupplier(){
    //         this.$store.dispatch("loginSupplier", {
    //             nomorHandphone: this.formLoginSupplier.nomorHandphone,
    //             password: this.formLoginSupplier.password
    //         })
    //         console.log(this.formLoginSupplier)
    //     }
    // },
    data(){
        return {
            user: new User('', ''),
            loading: false,
            message: ''
        }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.status.loggedIn
        }
    },
    created(){
        if(this.loggedIn){
            this.$router.push("/")
        }
    },
    methods: {
        handleLogin(){
            this.loading = true
            this.$validator.validateAll().then(isValid => {
                if(!isValid){
                    this.loading = false
                    return
                }
                if (this.user.nomorHandphone && this.user.password){
                    this.$store.dispatch('auth/login', this.user).then(
                        () => {
                            this.$router.push("/")
                        },
                        error => {
                            this.loading = false;
                            this.message =
                            (error.response && error.response.data && error.response.data.message)
                            error.message || error.toString();
                        }
                    )
                }
            })
        }
    }
}
</script>


<style scoped>

</style>
