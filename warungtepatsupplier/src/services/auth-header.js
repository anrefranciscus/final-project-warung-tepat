export default function AuthHeader(){
    let user  = JSON.parse(localStorage.getItem("user"))
    if(user && user.payload.token ){
        return {Authorization: `Bearer ${user.payload.token}`}
    }else {
        return {}
    }
}
