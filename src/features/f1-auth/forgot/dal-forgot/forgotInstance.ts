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
            message: `<div style="background-color: black; border-radius: 15px; color: #FFFFFF; padding: 15px">password recovery link: <a href='https://kibatensai.github.io/fridayfever/#/set-new-password/$token$'>link</a></div>`
        })
    }
}