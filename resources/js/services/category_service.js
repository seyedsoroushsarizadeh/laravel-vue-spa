import {http , httpFile } from "./http_service";

export function createCategory(data){
    return httpFile().post('/api/categories' , data);
}
