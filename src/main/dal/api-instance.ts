import axios  from 'axios';

export const baseURL = 'mock'

export const instance = axios.create({
    baseURL,
    withCredentials: true
})