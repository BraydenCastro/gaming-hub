import axios from "axios"

 export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
 params:{

key: '6c1002fef84545bbb632ee0391eae265'
 }
})