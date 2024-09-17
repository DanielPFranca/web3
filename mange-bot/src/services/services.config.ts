import axios, {type AxiosResponse} from "axios";
export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getAxios = ()=> {
    const createdAxios = axios.create({
        baseURL: `${BASE_URL}/api`, //"/proxy-api/api", //`${BASE_URL}/api`,
        timeout: 40000, //40 segundos
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: `Bearer meuToken...`
        },
    });

    //createdAxios.interceptors.request.use()
    createdAxios.interceptors.response.use(getAxiosResponse);
    console.log("BASE_URL", BASE_URL)
    return createdAxios;
}

export const getAxiosResponse = (response: AxiosResponse) =>{
    return response.data;
}

