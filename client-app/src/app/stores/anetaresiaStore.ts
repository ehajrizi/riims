
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Anetaresia } from "../models/anetaresia";

export default class AnetaresiaStore {
    anetaresiaRegistry = new Map<string, Anetaresia>();
    selectedAnetaresia: Anetaresia | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get anetaresiteByEmriInstOrg() {
        return Array.from(this.anetaresiaRegistry.values()).sort((a, b) => (a.emriInstOrg.localeCompare(b.emriInstOrg))
        )
    }

    loadAnetaresite = async () => {
        this.loadingInitial = true;
        try {
            const anetaresite= await agent.Anetaresite.list();
            anetaresite.forEach(anetaresia => {
                this.setAnetaresia(anetaresia);
            })
            this.setLoadingInitial(false);    
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
            
        }
    }

    loadAnetaresia= async (id: string) => {
        let anetaresia = this.getAnetaresia(id);
        if (anetaresia) {
            this.selectedAnetaresia = anetaresia;
            return anetaresia;
        } else {
            this.loadingInitial = true;
            try {
                anetaresia = await agent.Anetaresite.details(id);
                this.setAnetaresia(anetaresia);
                runInAction(() => {
                    this.selectedAnetaresia = anetaresia;
                })
                this.setLoadingInitial(false);
                return anetaresia;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setAnetaresia = (anetaresia: Anetaresia) => {
        this.anetaresiaRegistry.set(anetaresia.id, anetaresia);
    }

    private getAnetaresia = (id: string) => {
        return this.anetaresiaRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createAnetaresia = async (anetaresia: Anetaresia) => {
        this.loading = true;
        try {
            await agent.Anetaresite.create(anetaresia);
            runInAction(() => {
                this.anetaresiaRegistry.set(anetaresia.id, anetaresia);
                this.selectedAnetaresia = anetaresia;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction( () => {
                this.loading = false;
            })
        }
    }

    updateAnetaresia = async (anetaresia: Anetaresia) => {
        this.loading = true;
        try {
            await agent.Anetaresite.update(anetaresia);
            runInAction(() => {
                this.anetaresiaRegistry.set(anetaresia.id, anetaresia);
                this.selectedAnetaresia = anetaresia;
                this.editMode = false;
                this.loading = false
            })

        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteAnetaresia = async (id: string) => {
        this.loading = true;
        try {
            await agent.Anetaresite.delete(id);
            runInAction(() => {
                this.anetaresiaRegistry.delete(id);
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