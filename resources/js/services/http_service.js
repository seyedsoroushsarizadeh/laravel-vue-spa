import store from "../store";
import axios from "axios/dist/axios";

export function http(){
    return axios.create({
        baseURL: store.state.apiURL
    });
}

export function httpFile(){
    return axios.create({
        baseUrl: store.state.apiURL,
        headers:{
            'Content-Type':"multipart/data-form"
        }
    });
}
