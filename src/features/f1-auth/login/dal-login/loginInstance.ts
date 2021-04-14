import axios from "axios"
import { devURL, herokuURL } from "../../../../main/dal/baseURLs"

const instance = axios.create({
    baseURL: devURL,
    withCredentials: true
})


export const loginAPI = {
    signIn(data: LoginDetailsType) {
        return instance.post('auth/login', data)
    },
    signOut() {
        return instance.delete('auth/me')
    },
    me() {
        return instance.post('auth/me')
    }
}

export type LoginDetailsType = {
    email: string | ReadonlyArray<string> | number
    password: string | ReadonlyArray<string> | number
    rememberMe: boolean
}