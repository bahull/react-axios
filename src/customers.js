import apiURL from "./api";
import axios from "axios";

export function getCustomerList(){
    return  axios.get(apiURL).then(response => response.data);
}


export function postCustomer(obj){
    return axios.post(apiURL, obj).then(response => {
        response.data;
    })
}