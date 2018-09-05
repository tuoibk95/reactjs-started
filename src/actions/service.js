import axios from "axios/index";
import { BASE_URL } from './constants'
import { reactLocalStorage } from "reactjs-localstorage";

const getHeaders = () => {
    // const token = reactLocalStorage.get("user.token", "");
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': token
    }
}

const handleError = (e) => {
    if (e && e.response) {
        e = e.response;
        if (e && e.status <= 299) //success 
            return false
        else if (e.status <= 499) { // error data
            return e.data.error && e.data.error.message;
        } else { // error network
            console.log("Có lỗi xảy ra. Vui lòng thử lại");
            return e;
        }
    } else {
        console.log("Có lỗi xảy ra. Vui lòng thử lại");
        return e;
    }
}

const MyService = {
    getRequestData: async function (url, params) {
        var result = await axios({
            method: 'get',
            url: BASE_URL + url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            params: params
        })
            .then(response => {
                console.log(response.data)
                return response.data;
            })
            .catch(
                error => console.log(error)
            )
        return result;
    }
    ,
    postRequestData: async function (url, data) {
        var result = await axios.post(BASE_URL + url, data, {
            headers: getHeaders()
        })
            .then(response => {
                console.log(response.data)
                return response.data;
            })
            .catch(
                error => console.log(error)
            )
        return result;
    },
    putRequestData: async (url, data) => {
        var result = await axios.put(BASE_URL + url, data, {
            headers: getHeaders()
        })
            .then(response => {
                console.log(response)
                return response.data;
            })
            .catch(
                error => console.log(error)
            )
        return result;
    },
    deleteRequestData: async (url) => {
        var result = await axios.delete(BASE_URL + url, {
            headers: getHeaders()
        })
            .then(response => {
                console.log(response)
                return response.data;
            })
            .catch(
                error => console.log(error)
            )
        return result;
    },
}

export default MyService;