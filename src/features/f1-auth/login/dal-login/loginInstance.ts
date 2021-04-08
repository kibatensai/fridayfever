import axios from "axios"

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})


export const loginAPI = {
    signIn(data: LoginDetailsType) {
        return instance.post('auth/login', data)

    }
}

export type LoginDetailsType = {
    email: string | ReadonlyArray<string> | number
    password: string | ReadonlyArray<string> | number
    rememberMe: boolean
}