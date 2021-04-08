import axios from "axios"

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
})


export const setPassAPI = {
    setPassword(password: string, resetPasswordToken: string) {
        return instance.post("/auth/set-new-password", {
            password,
            resetPasswordToken
        })
    }
}