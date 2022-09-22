import { HttpClientBase } from './http.base';
import { API_GET_URLS, API_POST_URLS } from './api.types';

export const API_BASE_URL = process.env.HOST_API_URL;

class ApiRoutes extends HttpClientBase {
    public constructor(baseUrl: string) {
        super(baseUrl);
    }

    public get = (url: API_GET_URLS) => this.instance.get(url);
    public post = (url: API_POST_URLS, data, config?) =>
        this.instance.post(url, data, config);

    public increaseCounter = (amount: number) =>
        this.instance.post('/counter', { amount }); //example

    //public getUsers = () => this.instance.get<User[]>('/users'); //example

    //public getUser = (id: string) => this.instance.get<User>(`/users/${id}`); //example
}

const api = new ApiRoutes(API_BASE_URL ?? '/api/');

export default api;
