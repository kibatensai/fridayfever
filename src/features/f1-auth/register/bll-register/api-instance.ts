import axios from 'axios';

export const baseURL = 'https://neko-back.herokuapp.com/2.0';

export const instance = axios.create({
  baseURL,
  withCredentials: true,
});

export const fridayAPI = {
  register(email: string, password: string) {
    const promise = instance.post<ResponseType>('/auth/register', { email, password });
    return promise;
  },
};

export type ResponseType = {
  addedUser: Object;
  error?: string;
};
