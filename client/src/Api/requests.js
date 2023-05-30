import { BASE_URL } from "./baseUrl";
import axios from "axios"


//get all datas
export const getAllDatas = async () => {
    let globalData;
    await axios.get(`${BASE_URL}/systems`)
        .then(res => {
            globalData = res.data
        })
    return globalData;
}
//get data by id
export const getDataByID = async (id) => {
    let globalData;
    await axios.get(`${BASE_URL}/systems/${id}`)
        .then(res => {
            globalData = res.data
        })
    return globalData;
}
//delete
export const deleteData = (id)=>{
    axios.delete(`${BASE_URL}/systems/${id}`)
}
//post
export const postData = (newData)=>{
    axios.post(`${BASE_URL}/systems`, newData)
}
//put
export const putData = (id, editedData)=>{
    axios.put(`${BASE_URL}/systems/${id}`,editedData)
}