import axios from 'axios';
 axios.defaults.baseURL ='http://platano-001-site1.ftempurl.com/api';

axios.interceptors.request.use((config)=>{
    const token = window.localStorage.getItem('security_token');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
        return config
    }
    return config
},err=>{
    return Promise.reject(err);
});

const  requestGenerico ={
    get :  (url) =>  axios.get(url),
    post : (url,body) => axios.post(url,body),
    put : (url,body) => axios.put(url,body),
    delete : (url) => axios.delete(url)
};

export default requestGenerico;