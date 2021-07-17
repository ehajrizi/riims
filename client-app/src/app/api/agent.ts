import axios, { AxiosResponse } from 'axios';
import { Edukimi } from '../models/edukimi';
import { Eksperienca } from '../models/eksperienca';
import { MbikeqyresiTemave } from '../models/mbikeqyresitemave';
import { Publikimi } from '../models/publikimi';
import { Specializimi } from '../models/specializimi';
import { Profili } from '../models/profili';
import { Projekti } from '../models/projekti';
import { HonorandAward } from '../models/honorandaward';
import { Anetaresia } from '../models/anetaresia';
import { Gjuha } from '../models/gjuha';
import { Certifikimi } from '../models/certifikimi';
import { Pjesemarresi } from '../models/pjesemarresi';
import { Donatori } from '../models/donatori';
import { store } from '../stores/store';
import { User, UserFormValues } from '../models/user';


const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
} 

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response=> {
    try {
        await sleep(0.1);
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

const Certifikimet = {
    list: () => requests.get<Certifikimi[]>('/certifikimet'),
    details: (id: string) => requests.get<Certifikimi>(`/certifikimet/${id}`),
    create: (certifikimi : Certifikimi) => axios.post<void>(`/certifikimet`, certifikimi),
    update: (certifikimi : Certifikimi) => axios.put<void>(`/certifikimet/${certifikimi.id}`,certifikimi),
    delete: (id: string) => axios.delete<void>(`/certifikimet/${id}`)
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

const Projektet = {
    list: () => requests.get<Projekti[]>('/projektet'),
    details: (id: string) => requests.get<Projekti>(`/projektet/${id}`),
    create: (projekti : Projekti) => axios.post<void>(`/projektet`, projekti),
    update: (projekti : Projekti) => axios.put<void>(`/projektet/${projekti.id}`, projekti),
    delete: (id: string) => axios.delete<void>(`/projektet/${id}`)
}

const Anetaresite= {
    list: () => requests.get<Anetaresia[]>('/anetaresite'),
    details: (id: string) => requests.get<Anetaresia>(`/anetaresite/${id}`),
    create: (anetaresia : Anetaresia) => axios.post<void>(`/anetaresite`, anetaresia),
    update: (anetaresia : Anetaresia) => axios.put<void>(`/anetaresite/${anetaresia.id}`, anetaresia),
    delete: (id: string) => axios.delete<void>(`/anetaresite/${id}`)
}
const HonorsandAwards= {
    list: () => requests.get<HonorandAward[]>('/honorsandawards'),
    details: (id: string) => requests.get<HonorandAward>(`/honorsandawards/${id}`),
    create: (honorandaward : HonorandAward) => axios.post<void>(`/honorsandawards`, honorandaward),
    update: (honorandaward : HonorandAward) => axios.put<void>(`/honorsandawards/${honorandaward.id}`, honorandaward),
    delete: (id: string) => axios.delete<void>(`/honorsandawards/${id}`)
}
const Gjuhet = {
    list: () => requests.get<Gjuha[]>('/gjuhet'),
    details: (id: string) => requests.get<Gjuha>(`/gjuhet/${id}`),
    create: (gjuha : Gjuha) => axios.post<void>(`/gjuhet`, gjuha),
    update: (gjuha : Gjuha) => axios.put<void>(`/gjuhet/${gjuha.id}`,gjuha),
    delete: (id: string) => axios.delete<void>(`/gjuhet/${id}`)
}
const Pjesemarresit= {
    list: () => requests.get<Pjesemarresi[]>('/pjesemarresit'),
    details: (id: string) => requests.get<Pjesemarresi>(`/pjesemarresit/${id}`),
    create: (pjesemarresi : Pjesemarresi) => axios.post<void>(`/pjesemarresit`, pjesemarresi),
    update: (pjesemarresi : Pjesemarresi) => axios.put<void>(`/pjesemarresit/${pjesemarresi.id}`, pjesemarresi),
    delete: (id: string) => axios.delete<void>(`/pjesemarresit/${id}`)
}
const Donatoret= {
    list: () => requests.get<Donatori[]>('/donatoret'),
    details: (id: string) => requests.get<Donatori>(`/donatoret/${id}`),
    create: (donatori : Donatori) => axios.post<void>(`/donatoret`, donatori),
    update: (donatori : Donatori) => axios.put<void>(`/donatoret/${donatori.id}`, donatori),
    delete: (id: string) => axios.delete<void>(`/donatoret/${id}`)
}
const Account = {
    // current: () => requests.get<User>('/account'),
    current: () => axios.get<User>('/account').then(responseBody),
    login: (user: UserFormValues) => axios.post<User>('/account/login', user).then(responseBody),
    register: (user: UserFormValues) => axios.post<User>('/account/register', user).then(responseBody),
}

const agent = {
    Eksperiencat,
    Edukimet,
    Certifikimet,
    Publikimet,
    Specializimet,
    MbikeqyresitTemave,
    Profilet,
    Projektet,
    Anetaresite,
    HonorsandAwards,
    Gjuhet,
    Pjesemarresit,
    Donatoret,
    Account

}

export default agent;
