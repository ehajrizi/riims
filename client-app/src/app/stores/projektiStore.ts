import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Projekti } from "../models/projekti";


export default class ProjektiStore{
    projektiRegistry = new Map<string, Projekti>();
    selectedProjekti: Projekti | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;


    constructor(){
        makeAutoObservable(this)
    }

    get projektetByDate(){
        return Array.from(this.projektiRegistry.values()).sort((a, b) => a.dataFillimit!.getTime() - b.dataFillimit!.getTime());
    } 

    loadProjektet = async () => {
        this.loadingInitial = true;
        try{
            const projektet = await agent.Projektet.list();
            projektet.forEach(projekti =>{
                    this.setProjekti(projekti);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadProjekti = async (id:string) =>{
        let projekti = this.getProjekti(id);
        if(projekti){
            this.selectedProjekti = projekti;
            return projekti;
        }else{
            this.loadingInitial = true;
            try{
                projekti = await agent.Projektet.details(id);
                this.setProjekti(projekti);
                runInAction(() => {
                    this.selectedProjekti = projekti;
                })
                this.setLoadingInitial(false);
                return projekti;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setProjekti = (projekti:  Projekti) => {
        projekti.dataFillimit = new Date(projekti.dataFillimit!);
        projekti.dataMbarimit = new Date(projekti.dataMbarimit!);
        this.projektiRegistry.set(projekti.id, projekti);
    }

    private getProjekti = (id:string)=>{
        return this.projektiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createProjekti = async (projekti: Projekti) => {
        this.loading = true;
        try{
            await agent.Projektet.create(projekti);
            runInAction(() => {
                this.projektiRegistry.set(projekti.id, projekti);
                this.selectedProjekti = projekti;
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
    
    updateProjekti = async (projekti: Projekti) => {
        this.loading = true;
        try{
            await agent.Projektet.update(projekti);
            runInAction(()=>{
                this.projektiRegistry.set(projekti.id, projekti);
                this.selectedProjekti = projekti;
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

    deleteProjekti = async (id: string) => {
        this.loading = true;
        try{
            await agent.Projektet.delete(id);
            runInAction(() => {
                this.projektiRegistry.delete(id);
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