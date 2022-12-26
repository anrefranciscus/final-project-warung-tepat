import AuthService from "@/services/auth.service";


const user = localStorage.getItem("user");

const initialState = user ? 
{status: {loggedIn: true}, user} 
: {status: {loggedIn: false}, user: null}


export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({commit}, user){
            return AuthService.login(user).then(
                user => {
                    commit("LOGIN_SUCCESS", user)
                    console.log(user)
                    return Promise.resolve(user)
                },
                error => {
                    commit("LOGIN_FAILURE");
                    return Promise.reject(error)
                }
            )
        },
        logout({commit}){
            AuthService.logout();
            commit("LOGOUT")
        },
        register({commit}, user){
            return AuthService.register(user).then(
                response => {
                    commit("REGISTER_SUCCESS")
                    return Promise.resolve(response.data)
                },
                error => {
                    commit("REGISTER_FAILURE");
                    return Promise.reject(error)
                }
            )
        }
    },
    mutations: {
        LOGIN_SUCCESS(state, user){
            state.status.loggedIn = true
            state.user = user
        },
        LOGIN_FAILURE(state){
            state.status.loggedIn = false
            state.user = null
        },
        LOGOUT(state){
            state.status.loggedIn = false
            state.user = null
        },
        REGISTER_SUCCESS(state){
            state.status.loggedIn = false
        },
        REGISTER_FAILURE(state){
            state.status.loggedIn = false
        }
    }
}