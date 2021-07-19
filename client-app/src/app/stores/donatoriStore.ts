import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Donatori } from "../models/donatori";


export default class DonatoriStore{
    donatoriRegistry = new Map<string, Donatori>();
    selectedDonatori: Donatori | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

   

    loadDonatoret = async () => {
        this.loadingInitial = true;
        try{
            const donatoret = await agent.Donatoret.list();
            donatoret.forEach(donatori =>{
                    this.setDonatori(donatori);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadDonatori= async (id:string) =>{
        let donatori = this.getDonatori(id);
        if(donatori){
            this.selectedDonatori = donatori;
            return donatori;
        }else{
            this.loadingInitial = true;
            try{
                donatori = await agent.Donatoret.details(id);
                this.setDonatori(donatori);
                runInAction(() => {
                    this.selectedDonatori = donatori;
                })
                this.setLoadingInitial(false);
                return donatori;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setDonatori = (donatori:  Donatori) => {
    
        this.donatoriRegistry.set(donatori.id, donatori);
    }

    private getDonatori = (id:string)=>{
        return this.donatoriRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createDonatori = async (donatori: Donatori) => {
        this.loading = true;
        try{
            await agent.Donatoret.create(donatori);
            runInAction(() => {
                this.donatoriRegistry.set(donatori.id, donatori);
                this.selectedDonatori = donatori;
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
    
    updateDonatori = async (donatori: Donatori) => {
        this.loading = true;
        try{
            await agent.Donatoret.update(donatori);
            runInAction(()=>{
                this.donatoriRegistry.set(donatori.id, donatori);
                this.selectedDonatori = donatori;
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

    deleteDonatori = async (id: string) => {
        this.loading = true;
        try{
            await agent.Donatoret.delete(id);
            runInAction(() => {
                this.donatoriRegistry.delete(id);
                this.loading = false;
            })

        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    get DonatoretByEmri() {
        return Array.from(this.donatoriRegistry.values()).sort((a, b) => (a.emriIDonatorit.localeCompare(b.emriIDonatorit))
        )
    }


}