import Store from "../store";
import axios from "axios/dist/axios";

export function http(){
    return axios.create({
        baseURL: Store.state.apiURL
    });
}

export function httpFile(){
    return axios.create({
        baseUrl: Store.state.apiURL,
        headers:{
            'Content-Type':"multipart/data-form"
        }
    });
}
