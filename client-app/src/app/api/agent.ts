import axios, { AxiosResponse } from 'axios';
import { Edukimi } from '../models/edukimi';
import { Eksperienca } from '../models/eksperienca';
import { MbikeqyresiTemave } from '../models/mbikeqyresitemave';
import { Publikimi } from '../models/publikimi';
import { Specializimi } from '../models/specializimi';
import { Profili } from '../models/profili';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
} 

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response=> {
    try {
        await sleep(1000);
        return response;
    } catch (error) { 
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

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

const Edukimet = {
    list: () => requests.get<Edukimi[]>('/edukimet'),
    details: (id: string) => requests.get<Edukimi>(`/edukimet/${id}`),
    create: (edukimi : Edukimi) => axios.post<void>(`/edukimet`, edukimi),
    update: (edukimi : Edukimi) => axios.put<void>(`/edukimet/${edukimi.id}`,edukimi),
    delete: (id: string) => axios.delete<void>(`/edukimet/${id}`)
}

const Publikimet = {
    list: () => requests.get<Publikimi[]>('/publikimet'),
    details: (id: string) => requests.get<Publikimi>(`/publikimet/${id}`),
    create: (publikimi : Publikimi) => axios.post<void>(`/publikimet`, publikimi),
    update: (publikimi : Publikimi) => axios.put<void>(`/publikimet/${publikimi.id}`,publikimi),
    delete: (id: string) => axios.delete<void>(`/publikimet/${id}`)
}

const Specializimet = {
    list: () => requests.get<Specializimi[]>('/specializimet'),
    details: (id: string) => requests.get<Specializimi>(`/specializimet/${id}`),
    create: (specializimi : Specializimi) => axios.post<void>(`/specializimet`, specializimi),
    update: (specializimi : Specializimi) => axios.put<void>(`/specializimet/${specializimi.id}`,specializimi),
    delete: (id: string) => axios.delete<void>(`/specializimet/${id}`)
}

const MbikeqyresitTemave ={
    list: ()=> requests.get<MbikeqyresiTemave[]>('/mbikeqyresitemave'),
    details: (id:string)=> requests.get<MbikeqyresiTemave>(`/mbikeqyresitemave/${id}`),
    create:(mbikeqyresitemave:MbikeqyresiTemave)=>axios.post<void>('/mbikeqyresitemave',mbikeqyresitemave),
    update:(mbikeqyresitemave:MbikeqyresiTemave)=>axios.put<void>(`/mbikeqyresitemave/${mbikeqyresitemave.id}`,mbikeqyresitemave),
    delete: (id:string)=> axios.delete<void>(`/mbikeqyresitemave/${id}`)
    
}
const Profilet ={
    list: ()=> requests.get<Profili[]>('/profili'),
    details: (id:string)=> requests.get<Profili>(`/profili/${id}`),
    create:(profili:Profili)=>axios.post<void>('/profili',profili),
    update:(profili:Profili)=>axios.put<void>(`/profili/${profili.id}`,profili),
    delete: (id:string)=> axios.delete<void>(`/profili/${id}`)
    
}


const agent = {
    Eksperiencat,
    Edukimet,
    Publikimet,
    Specializimet,
    MbikeqyresitTemave,
    Profilet
}

export default agent;
