import apiURL from "./api";
import axios from "axios";

export function getCustomerList(){
    return  axios.get(apiURL).then(response => response.data).catch(console.log);
}


export function postCustomer(obj){
    return axios.post(apiURL, obj).then(response => {
       return response.data;
    }).catch(console.log)
}

export function getCustomer(id){
    return axios.get(apiURL + id).then(response => response.data).catch(console.log)
}
export function updateCustomer(id, object){
    return axios.patch(apiURL + id, object).then(response => {
        return response.data
    }).catch(console.log)
}
export const deleteCustomer = function(id) {
    return axios.delete(apiURL + id).then(response => {
      return response.data;
    })
  }