import axios from 'axios'

const API = axios.create({
    baseURL:'http://localhost:6000/api/auth',
    withCredentials: true
})

export const registerUser = (data:{email:string; password:string; name:string}) =>{
    return API.post('/register', data)
}

//