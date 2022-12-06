import axios from 'axios';
 axios.defaults.baseURL ='https://lets-eat.somee.com/api';

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

const  requestGenerico =  {
    get :  async (url) =>  await axios.get(url),
    post : async (url,body) => await axios.post(url,body),
    put : async (url,body) =>  await axios.put(url,body),
    delete :async (url) => await axios.delete(url)
};

export default requestGenerico;