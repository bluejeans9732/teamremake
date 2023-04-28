import ApiManager from './ApiManager';

const ApiUseUser = async data => {
    try {
        const result = await ApiManager('/customer/login', {
            method:"POST",
            headers:{
                'Content-Type' : "application/json"
            },
            data:data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}

export default ApiUseUser