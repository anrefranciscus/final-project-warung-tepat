import baseUrlAPI from "@/api";
import axios from "axios"


class AuthService {
    login(user){
        return axios.post(
            `${baseUrlAPI}/login`,{
                nomorHandphone: user.nomorHandphone,
                password: user.password
            })
            .then(response => {
                if (response.data.payload.token){
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            });
    }

    logout(){
        localStorage.removeItem("user")
    }

    register(user){
        return axios.post(`${baseUrlAPI}/register`, {
            nomorHandphone: user.nomorHandphone,
            email: user.email,
            password: user.password
        })
    }
}

export default new AuthService();