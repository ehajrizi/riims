import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Gjuha } from "../models/gjuha";


export default class GjuhaStore{
    gjuhaRegistry = new Map<string, Gjuha>();
    selectedGjuha: Gjuha | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get gjuhetByGjuha() {
        return Array.from(this.gjuhaRegistry.values()).sort((a, b) => (a.zgjedhGjuha.localeCompare(b.zgjedhGjuha))
        )
    }

    loadGjuhet = async () => {
        this.loadingInitial = true;
        try{
            const gjuhet = await agent.Gjuhet.list();
            gjuhet.forEach(gjuha =>{
                    this.setGjuha(gjuha);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadGjuha = async (id:string) =>{
        let gjuha = this.getGjuha(id);
        if(gjuha){
            this.selectedGjuha = gjuha;
            return gjuha;
        }else{
            this.loadingInitial = true;
            try{
                gjuha = await agent.Gjuhet.details(id);
                this.setGjuha(gjuha);
                runInAction(() => {
                    this.selectedGjuha = gjuha;
                })
                this.setLoadingInitial(false);
                return gjuha;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setGjuha = (gjuha:  Gjuha) => {
        this.gjuhaRegistry.set(gjuha.id, gjuha);
    }

    private getGjuha = (id:string)=>{
        return this.gjuhaRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createGjuha = async (gjuha:Gjuha) => {
        this.loading = true;
        try{
            await agent.Gjuhet.create(gjuha);
            runInAction(() => {
                this.gjuhaRegistry.set(gjuha.id,gjuha);
                this.selectedGjuha = gjuha;
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
    
    updateGjuha = async (gjuha:Gjuha) => {
        this.loading = true;
        try{
            await agent.Gjuhet.update(gjuha);
            runInAction(()=>{
                this.gjuhaRegistry.set(gjuha.id,gjuha);
                this.selectedGjuha = gjuha;
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

    deleteGjuha = async (id:string) => {
        this.loading = true;
        try{
            await agent.Gjuhet.delete(id);
            runInAction(() => {
                this.gjuhaRegistry.delete(id);
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