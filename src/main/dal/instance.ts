import axios from "axios";
import { devURL, herokuURL } from "./baseURLs";


export const instance = axios.create({
    baseURL: herokuURL,
    withCredentials: true,
});