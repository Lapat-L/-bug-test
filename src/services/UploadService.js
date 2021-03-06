import axios from 'axios'
import AuthService from './AuthService'

const api_endpoint = process.env.VUE_APP_ENDPOINT

export default{
    async uploadImage(data){
        let url = `${api_endpoint}/upload`
        let headers = AuthService.getApiHeader()
        let res = await axios.post(url, data, headers)
        return res
    }
}