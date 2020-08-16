import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL
});

axiosInstance.interceptors.request.use((request) => {
	return request;
}, error =>  Promise.reject(error));

axiosInstance.interceptors.response.use((response) => {
    return response;
},  error =>  Promise.reject(error) );

export default axiosInstance;
