import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";


export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this)
    }
    
    get isLoggedIn() {
        return !!this.user;
    }

    get UserId() {
        // console.log(this.user?.id);
        return this.user?.id;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            {user?.roli == "simpleUser" ? (
                history.push('/adminDashboard')
            ): history.push('/home');}
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        if(store.commonStore.token != null) {
            store.commonStore.setToken(null);
        }
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
}