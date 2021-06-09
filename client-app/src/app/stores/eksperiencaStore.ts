import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Eksperienca } from "../models/eksperienca";


export default class EksperiencaStore{
    eksperiencaRegistry = new Map<string, Eksperienca>();
    selectedEksperienca: Eksperienca | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get eksperiencatByDate(){
        return Array.from(this.eksperiencaRegistry.values()).sort((a,b) => 
        Date.parse(a.dataFillestare)-Date.parse(b.dataFillestare))
    } //a,b activities qe krahasohen 

    loadEksperiencat = async () => {
        this.loadingInitial = true;
        try{
            const eksperiencat = await agent.Eksperiencat.list();
                eksperiencat.forEach(eksperienca =>{
                    this.setEksperienca(eksperienca);
                    //kryhet si action e sqet warnings
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadEksperienca = async (id:string) =>{
        let eksperienca = this.getEksperienca(id);
        if(eksperienca){
            this.selectedEksperienca = eksperienca;
            return eksperienca;
        }else{
            this.loadingInitial = true;
            try{
                eksperienca = await agent.Eksperiencat.details(id);
                this.setEksperienca(eksperienca);
                runInAction(() => {
                    this.selectedEksperienca = eksperienca;
                })
                this.setLoadingInitial(false);
                return eksperienca;
                //se perndryshe osht udefined e smeerret me set e sene
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setEksperienca = (eksperienca:  Eksperienca) => {
        //eksperienca.dataFillestare = eksperienca.dataFillestare.split('T')[0]; 
        this.eksperiencaRegistry.set(eksperienca.id, eksperienca);
    }

    private getEksperienca = (id:string)=>{
        return this.eksperiencaRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createEksperienca = async (eksperienca:Eksperienca) => {
        this.loading = true;
        try{
            await agent.Eksperiencat.create(eksperienca);
            runInAction(() => {
                this.eksperiencaRegistry.set(eksperienca.id,eksperienca);
                this.selectedEksperienca = eksperienca;
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
    
    updateEksperienca = async (eksperienca:Eksperienca) => {
        this.loading = true;
        try{
            await agent.Eksperiencat.update(eksperienca);
            runInAction(()=>{
                this.eksperiencaRegistry.set(eksperienca.id,eksperienca);
                //e krijon ni array t'ri edhe e zevedsojm tani ^ e largojm qat aktivitet qe e bojm update 
                this.selectedEksperienca = eksperienca;
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

    deleteEksperienca = async (id:string) => {
        this.loading = true;
        try{
            await agent.Eksperiencat.delete(id);
            runInAction(() => {
                this.eksperiencaRegistry.delete(id);
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