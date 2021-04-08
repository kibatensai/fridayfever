import axios from "axios"

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
})


export const forgotAPI = {
    forgot(email: string) {
        return instance.post("/auth/forgot", {
            email,
            from: "roman",
            message: `<div style="background-color: lime; padding: 15px">password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
        })
    }
}