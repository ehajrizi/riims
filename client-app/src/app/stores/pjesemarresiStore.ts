import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Pjesemarresi } from "../models/pjesemarresi";


export default class PjesemarresiStore{
    pjesemarresiRegistry = new Map<string, Pjesemarresi>();
    selectedPjesemarresi: Pjesemarresi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get pjesemarresiByEmri(){
        return Array.from(this.pjesemarresiRegistry.values()).sort((a,b) => 
        (a.emriIPjesemarresit.localeCompare(b.emriIPjesemarresit))
        )
    } 

    loadPjesemarresit = async () => {
        this.loadingInitial = true;
        try{
            const pjesemarresit = await agent.Pjesemarresit.list();
            pjesemarresit.forEach(pjesemarresi =>{
                    this.setPjesemarresi(pjesemarresi);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadPjesemarresi = async (id:string) =>{
        let pjesemarresi = this.getPjesemarresi(id);
        if(pjesemarresi){
            this.selectedPjesemarresi = pjesemarresi;
            return pjesemarresi;
        }else{
            this.loadingInitial = true;
            try{
                pjesemarresi = await agent.Pjesemarresit.details(id);
                this.setPjesemarresi(pjesemarresi);
                runInAction(() => {
                    this.selectedPjesemarresi = pjesemarresi;
                })
                this.setLoadingInitial(false);
                return pjesemarresi;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setPjesemarresi = (pjesemarresi:  Pjesemarresi) => {
        
        this.pjesemarresiRegistry.set(pjesemarresi.id, pjesemarresi);
    }

    private getPjesemarresi = (id:string)=>{
        return this.pjesemarresiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createPjesemarresi = async (pjesemarresi: Pjesemarresi) => {
        this.loading = true;
        try{
            await agent.Pjesemarresit.create(pjesemarresi);
            runInAction(() => {
                this.pjesemarresiRegistry.set(pjesemarresi.id, pjesemarresi);
                this.selectedPjesemarresi = pjesemarresi;
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
    
    updatePjesemarresi = async (pjesemarresi: Pjesemarresi) => {
        this.loading = true;
        try{
            await agent.Pjesemarresit.update(pjesemarresi);
            runInAction(()=>{
                this.pjesemarresiRegistry.set(pjesemarresi.id, pjesemarresi);
                this.selectedPjesemarresi = pjesemarresi;
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

    deletePjesemarresi = async (id: string) => {
        this.loading = true;
        try{
            await agent.Pjesemarresit.delete(id);
            runInAction(() => {
                this.pjesemarresiRegistry.delete(id);
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