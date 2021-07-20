import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import { User, UserFormValues } from "../models/user";
import { store, useStore } from "./store";


export default class UserStore {
    user: User | null = null;
    userRegistry = new Map<string, User>();
    selectedUser: User | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    get UserId() {
        return this.user?.id;
    }
    get UserEmail() {
        console.log(this.user?.email);
        return this.user?.email;
    }

    get UserLoggedIn() {
        return this.user;
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            {user?.roli == "admin" ? (
                history.push('/adminDashboard')
            ): history.push('/home');}
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        history.push('/');
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }
    }

    register = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/home');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    loadUsers = async () => {
        this.loadingInitial = true;
        try{
            const users = await agent.Account.list();
                users.forEach(user =>{
                    this.setUser(user);
                  })
                  this.setLoadingInitial(false);
                  
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadUser = async (email:string) =>{
        let user = this.getUsr(email);
        if(user){
            this.selectedUser = user;
            return user;
        }else{
            this.loadingInitial = true;
            try{
                user = await agent.Account.details(email);
                this.setUser(user);
                runInAction(() => {
                    this.selectedUser = user;
                })
                this.setLoadingInitial(false);
                return user;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    updateUser = async (user:User) => {
        this.loading = true;
        try{
            await agent.Account.update(user);
            runInAction(()=>{
                this.userRegistry.set(user.email,user);
                this.selectedUser = user;
                this.editMode = false;
                this.loading = false;
            })

        }catch(error){
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            })
        }
    }

    private getUsr = (email:string)=>{
        return this.userRegistry.get(email);
    }


    private setUser = (user:  User) => {
        user.datelindja = new Date(user.datelindja!);
        this.userRegistry.set(user.email, user);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }

    get userat(){
        return Array.from(this.userRegistry.values());
    }

    getUsers = async () => {
        try {
            const users = await agent.Account.list();
            users.forEach(user =>{
                this.setUser(user);
            })   
        } catch (error) {
            console.log(error);
        }
    }

    deleteUser = async (email:string) => {
        this.loading = true;
        try{
            await agent.Account.delete(email);
            runInAction(() => {
                this.userRegistry.delete(email);
                this.loading = false;
            })

        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
    setEmri = (emri: string) => {
        if (this.user) this.user.emri = emri;
    }
    setMbiemri = (mbiemri: string) => {
        if (this.user) this.user.mbiemri = mbiemri;
    }
    setEmriMesem = (emriMesem: string) => {
        if (this.user) this.user.emriMesem = emriMesem;
    }
    setDatelindja = (datelindja: Date) => {
        if (this.user) this.user.datelindja = datelindja;
    }
    setGjinia = (gjinia: string) => {
        if (this.user) this.user.gjinia = gjinia;
    }
    setTitulliShkencor = (titulliShkencor: string) => {
        if (this.user) this.user.titulliShkencor = titulliShkencor;
    }
    setVendlindja = (vendlindja: string) => {
        if (this.user) this.user.vendlindja = vendlindja;
    }
    setShtetiLindjes = (shtetiLindjes: string) => {
        if (this.user) this.user.shtetiLindjes = shtetiLindjes;
    }
    setRruga = (rruga: string) => {
        if (this.user) this.user.rrugaCurrent = rruga;
    }
    setQyteti = (qytetiCurrent: string) => {
        if (this.user) this.user.qytetiCurrent = qytetiCurrent;
    }
    setZipKodi = (zipKodiCurrent: string) => {
        if (this.user) this.user.zipKodiCurrent = zipKodiCurrent;
    }
    setShteti = (shtetiCurrent: string) => {
        if (this.user) this.user.shtetiCurrent = shtetiCurrent;
    }
    setPershkrimi = (pershkrimi: string) => {
        if (this.user) this.user.pershkrimi = pershkrimi;
    }
    setLinkedIn = (linkedIn: string) => {
        if (this.user) this.user.linkedIn = linkedIn;
    }
    setPhoneNumber = (phoneNumber: string) => {
        if (this.user) this.user.phoneNumber = phoneNumber;
    }

    
}