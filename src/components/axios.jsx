import axios from 'axios';

const AXIOS = axios.create({
    baseURL: 'http://ec2-13-124-44-243.ap-northeast-2.compute.amazonaws.com:8081',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default AXIOS;