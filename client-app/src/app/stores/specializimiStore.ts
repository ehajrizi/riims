
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Specializimi } from "../models/specializimi";

export default class SpecializimiStore {
    specializimiRegistry = new Map<string, Specializimi>();
    selectedSpecializimi: Specializimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get specializimetByDate() {
        return Array.from(this.specializimiRegistry.values()).sort((a, b) => 
            Date.parse(a.dataFillestare) - Date.parse(b.dataFillestare));
    }

    loadSpecializimet = async () => {
        this.loadingInitial = true;
        try {
            const specializimet= await agent.Specializimet.list();
            specializimet.forEach(specializimi => {
                this.setSpecializimi(specializimi);
            })
            this.setLoadingInitial(false);    
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
            
        }
    }

    loadSpecializimi = async (id: string) => {
        let specializimi = this.getSpecializimi(id);
        if (specializimi) {
            this.selectedSpecializimi = specializimi;
            return specializimi;
        } else {
            this.loadingInitial = true;
            try {
                specializimi = await agent.Specializimet.details(id);
                this.setSpecializimi(specializimi);
                runInAction(() => {
                    this.selectedSpecializimi = specializimi;
                })
                this.setLoadingInitial(false);
                return specializimi;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setSpecializimi = (specializimi: Specializimi) => {
        //specializimi.date = specializimi.date.split('T')[0];
        this.specializimiRegistry.set(specializimi.id, specializimi);
    }

    private getSpecializimi = (id: string) => {
        return this.specializimiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createSpecializimi = async (specializimi: Specializimi) => {
        this.loading = true;
        try {
            await agent.Specializimet.create(specializimi);
            runInAction(() => {
                this.specializimiRegistry.set(specializimi.id, specializimi);
                this.selectedSpecializimi = specializimi;
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

    updateSpecializimi = async (specializimi: Specializimi) => {
        this.loading = true;
        try {
            await agent.Specializimet.update(specializimi);
            runInAction(() => {
                this.specializimiRegistry.set(specializimi.id, specializimi);
                this.selectedSpecializimi = specializimi;
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

    deleteSpecializimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Specializimet.delete(id);
            runInAction(() => {
                this.specializimiRegistry.delete(id);
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