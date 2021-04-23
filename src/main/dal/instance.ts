import axios from "axios";
import { devURL, herokuURL } from "./baseURLs";

export const instance = axios.create({
  baseURL: devURL,
  withCredentials: true,
});
