import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';


export async function postData(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.post(url, data, config);
}

export async function getData(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios.get(url, config);
}
