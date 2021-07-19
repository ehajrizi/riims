import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { PjesemarresiPublikimi } from "../models/pjesemarresiPublikimi";
import { store } from "./store";


export default class PjesemarresiPublikimiStore{
    pjesemarresiPublikimiRegistry = new Map<string, PjesemarresiPublikimi>();
    selectedPjesemarresiPublikimi: PjesemarresiPublikimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get pjesemarresiPublikimiByEmri(){
        return Array.from(this.pjesemarresiPublikimiRegistry.values()).sort((a,b) => 
        (a.emriIPjesemarresit.localeCompare(b.emriIPjesemarresit))
        )
    } 

    loadPjesemarresitPublikimet = async () => {
        this.loadingInitial = true;
        try{
            const pjesemarresitPublikimet = await agent.PjesemarresitPublikimet.list();
            pjesemarresitPublikimet.forEach(pjesemarresiPublikimi =>{
                    this.setPjesemarresiPublikimi(pjesemarresiPublikimi);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadPjesemarresiPublikimi = async (id:string) =>{
        let pjesemarresiPublikimi = this.getPjesemarresiPublikimi(id);
        if(pjesemarresiPublikimi){
            this.selectedPjesemarresiPublikimi = pjesemarresiPublikimi;
            return pjesemarresiPublikimi;
        }else{
            this.loadingInitial = true;
            try{
                pjesemarresiPublikimi = await agent.PjesemarresitPublikimet.details(id);
                this.setPjesemarresiPublikimi(pjesemarresiPublikimi);
                runInAction(() => {
                    this.selectedPjesemarresiPublikimi = pjesemarresiPublikimi;
                })
                this.setLoadingInitial(false);
                return pjesemarresiPublikimi;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setPjesemarresiPublikimi= (pjesemarresiPublikimi:  PjesemarresiPublikimi) => {
        // pjesemarresiPublikimi.dataFillestare = new Date(pjesemarresiPublikimi.dataFillestare!);
        // pjesemarresiPublikimi.dataPerfundimtare = new Date(pjesemarresiPublikimi.dataPerfundimtare!);
        this.pjesemarresiPublikimiRegistry.set(pjesemarresiPublikimi.id, pjesemarresiPublikimi);
    }

    private getPjesemarresiPublikimi = (id:string)=>{
        return this.pjesemarresiPublikimiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createPjesemarresiPublikimi= async (pjesemarresiPublikimi:PjesemarresiPublikimi) => {
        this.loading = true;
        try{
            await agent.PjesemarresitPublikimet.create(pjesemarresiPublikimi);
            runInAction(() => {
                this.pjesemarresiPublikimiRegistry.set(pjesemarresiPublikimi.id,pjesemarresiPublikimi);
                this.selectedPjesemarresiPublikimi = pjesemarresiPublikimi;
                this.editMode = false;
                this.loading = false;
            })

        }catch(error){
            console.log(error);
            runInAction(()=>{
                this.loading = false;
            })
        }
    }
    
    updatePjesemarresiPublikimi = async (pjesemarresiPublikimi:PjesemarresiPublikimi) => {
        this.loading = true;
        try{
            await agent.PjesemarresitPublikimet.update(pjesemarresiPublikimi);
            runInAction(()=>{
                this.pjesemarresiPublikimiRegistry.set(pjesemarresiPublikimi.id,pjesemarresiPublikimi);
                this.selectedPjesemarresiPublikimi = pjesemarresiPublikimi;
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

    deletePjesemarresiPublikimi = async (id:string) => {
        this.loading = true;
        try{
            await agent.PjesemarresitPublikimet.delete(id);
            runInAction(() => {
                this.pjesemarresiPublikimiRegistry.delete(id);
                this.loading = false;
            })

        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

}