import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Edukimi } from "../models/edukimi";


export default class EdukimiStore{
    edukimiRegistry = new Map<string, Edukimi>();
    selectedEdukimi: Edukimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get edukimetByDate(){
        return Array.from(this.edukimiRegistry.values()).sort((a,b) => 
        Date.parse(a.dataFillestare)-Date.parse(b.dataFillestare))
    } 

    loadEdukimet = async () => {
        this.loadingInitial = true;
        try{
            const edukimet = await agent.Edukimet.list();
            edukimet.forEach(edukimi =>{
                    this.setEdukimi(edukimi);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadEdukimi = async (id:string) =>{
        let edukimi = this.getEdukimi(id);
        if(edukimi){
            this.selectedEdukimi = edukimi;
            return edukimi;
        }else{
            this.loadingInitial = true;
            try{
                edukimi = await agent.Edukimet.details(id);
                this.setEdukimi(edukimi);
                runInAction(() => {
                    this.selectedEdukimi = edukimi;
                })
                this.setLoadingInitial(false);
                return edukimi;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setEdukimi = (edukimi:  Edukimi) => {
        this.edukimiRegistry.set(edukimi.id, edukimi);
    }

    private getEdukimi = (id:string)=>{
        return this.edukimiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createEdukimi = async (edukimi:Edukimi) => {
        this.loading = true;
        try{
            await agent.Edukimet.create(edukimi);
            runInAction(() => {
                this.edukimiRegistry.set(edukimi.id,edukimi);
                this.selectedEdukimi = edukimi;
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
    
    updateEdukimi = async (edukimi:Edukimi) => {
        this.loading = true;
        try{
            await agent.Edukimet.update(edukimi);
            runInAction(()=>{
                this.edukimiRegistry.set(edukimi.id,edukimi);
                this.selectedEdukimi = edukimi;
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

    deleteEdukimi = async (id:string) => {
        this.loading = true;
        try{
            await agent.Edukimet.delete(id);
            runInAction(() => {
                this.edukimiRegistry.delete(id);
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