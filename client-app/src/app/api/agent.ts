import axios, { AxiosResponse } from 'axios';
import { Eksperienca } from '../models/eksperienca';
//import { Publikimi } from '../models/publikimi';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
} 

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response=> {
    try {
        await sleep(1000); //delay by a second
        return response; //tani ktheje response
    } catch (error) { //nese ka error
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;
//pasi qe skthen veq Activities, e qesim ni generic type ktu e e specifikojme 
//me poshte

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url).then(responseBody),
    delete: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Eksperiencat = {
    list: () => requests.get<Eksperienca[]>('/eksperiencat'),
    details: (id: string) => requests.get<Eksperienca>(`/eksperiencat/${id}`),
    create: (eksperienca : Eksperienca) => axios.post<void>(`/eksperiencat`, eksperienca),
    update: (eksperienca : Eksperienca) => axios.put<void>(`/eksperiencat/${eksperienca.id}`,eksperienca),
    delete: (id: string) => axios.delete<void>(`/eksperiencat/${id}`)
}

// const Publikimet = {
//     list: () => requests.get<Publikimi[]>('/publikimet'),
//     details: (id: string) => requests.get<Publikimi>(`/publikimet/${id}`),
//     create: (publikimi : Publikimi) => axios.post<void>(`/publikimet`, publikimi),
//     update: (publikimi : Publikimi) => axios.put<void>(`/publikimet/${publikimi.id}`,publikimi),
//     delete: (id: string) => axios.delete<void>(`/publikimet/${id}`)
// }

const agent = {
    Eksperiencat
    //Publikimet
}

export default agent;
