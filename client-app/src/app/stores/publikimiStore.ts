
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Publikimi } from "../models/publikimi";


export default class PublikimiStore {
    publikimiRegistry = new Map<string, Publikimi>();
    selectedPublikimi: Publikimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor() {
        makeAutoObservable(this)
    }

    get publikimetByDate() {
        return Array.from(this.publikimiRegistry.values()).sort((a, b) =>
            Date.parse(a.data) - Date.parse(b.data));
    }

    loadPublikimet = async () => {
        this.loadingInitial = true;
        try {
            const publikimet = await agent.Publikimet.list();
            publikimet.forEach(publikimi => {
                this.setPublikimi(publikimi);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadPublikimi = async (id: string) => {
        let publikimi = this.getPublikimi(id);
        if (publikimi) {
            this.selectedPublikimi = publikimi;
            return publikimi;
        } else {
            this.loadingInitial = true;
            try {
                publikimi = await agent.Publikimet.details(id);
                this.setPublikimi(publikimi);
                runInAction(() => {
                    this.selectedPublikimi = publikimi;
                })
                this.setLoadingInitial(false);
                return publikimi;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setPublikimi = (publikimi: Publikimi) => {
        this.publikimiRegistry.set(publikimi.id, publikimi);
    }

    private getPublikimi = (id: string) => {
        return this.publikimiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createPublikimi = async (publikimi: Publikimi) => {
        this.loading = true;
        try {
            await agent.Publikimet.create(publikimi);
            runInAction(() => {
                this.publikimiRegistry.set(publikimi.id, publikimi);
                this.selectedPublikimi = publikimi;//kqyre qitu mos ka gabim??
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updatePublikimi = async (publikimi: Publikimi) => {
        this.loading = true;
        try {
            await agent.Publikimet.update(publikimi);
            runInAction(() => {
                this.publikimiRegistry.set(publikimi.id, publikimi);
                this.selectedPublikimi = publikimi;
                this.editMode = false;
                this.loading = false;
            })

        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deletePublikimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Publikimet.delete(id);
            runInAction(() => {
                this.publikimiRegistry.delete(id);
                this.loading = false;
            })

        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }


}