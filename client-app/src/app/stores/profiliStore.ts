import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Profili } from "../models/profili";


export default class ProfiliStore{
    profiliRegistry = new Map<string, Profili>();
    selectedProfili: Profili | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get profiletByDate(){
        return Array.from(this.profiliRegistry.values()).sort((a,b) => 
        Date.parse(a.dataELindjes)-Date.parse(b.dataELindjes));
    }

  

    loadProfilet = async () => {
        this.loadingInitial = true;
        try{
            const profilet = await agent.Profilet.list();
            profilet.forEach(profili =>{
                    this.setProfili(profili);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadProfili = async (id:string) =>{
        let profili = this.getProfili(id);
        if(profili){
            this.selectedProfili = profili;
            return profili;
        }else{
            this.loadingInitial = true;
            try{
                profili = await agent.Profilet.details(id);
                this.setProfili(profili);
                runInAction(() => {
                    this.selectedProfili = profili;
                })
                this.setLoadingInitial(false);
                return profili;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setProfili = (profili:  Profili) => {
        this.profiliRegistry.set(profili.id, profili);
    }

    private getProfili = (id:string)=>{
        return this.profiliRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createProfili = async (profili:Profili) => {
        this.loading = true;
        try{
            await agent.Profilet.create(profili);
            runInAction(() => {
                this.profiliRegistry.set(profili.id,profili);
                this.selectedProfili = profili;
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
    
    updateProfili = async (profili:Profili) => {
        this.loading = true;
        try{
            await agent.Profilet.update(profili);
            runInAction(()=>{
                this.profiliRegistry.set(profili.id,profili);
                this.selectedProfili = profili;
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

    deleteProfili = async (id:string) => {
        this.loading = true;
        try{
            await agent.Profilet.delete(id);
            runInAction(() => {
                this.profiliRegistry.delete(id);
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