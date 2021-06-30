import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { HonorandAward } from "../models/honorandaward";


export default class HonorandAwardStore{
    honorandawardRegistry = new Map<string, HonorandAward>();
    selectedHonorandAward: HonorandAward | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get honorsandawardsByTitulli() {
        return Array.from(this.honorandawardRegistry.values()).sort((a, b) => (a.titulli.localeCompare(b.titulli))
        )
    }

    loadHonorsandAwards = async () => {
        this.loadingInitial = true;
        try{
            const honorsandawards = await agent.HonorsandAwards.list();
            honorsandawards.forEach(honorandaward =>{
                    this.setHonorandAward(honorandaward);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadHonorandAward = async (id:string) =>{
        let honorandaward = this.getHonorandAward(id);
        if(honorandaward){
            this.selectedHonorandAward = honorandaward;
            return honorandaward;
        }else{
            this.loadingInitial = true;
            try{
                honorandaward = await agent.HonorsandAwards.details(id);
                this.setHonorandAward(honorandaward);
                runInAction(() => {
                    this.selectedHonorandAward = honorandaward;
                })
                this.setLoadingInitial(false);
                return honorandaward;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setHonorandAward = (honorandaward:  HonorandAward) => {
        this.honorandawardRegistry.set(honorandaward.id, honorandaward);
    }

    private getHonorandAward = (id:string)=>{
        return this.honorandawardRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createHonorandAward = async (honorandaward:HonorandAward) => {
        this.loading = true;
        try{
            await agent.HonorsandAwards.create(honorandaward);
            runInAction(() => {
                this.honorandawardRegistry.set(honorandaward.id,honorandaward);
                this.selectedHonorandAward = honorandaward;
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
    
    updateHonorandAward = async (honorandaward:HonorandAward) => {
        this.loading = true;
        try{
            await agent.HonorsandAwards.update(honorandaward);
            runInAction(()=>{
                this.honorandawardRegistry.set(honorandaward.id,honorandaward);
                this.selectedHonorandAward = honorandaward;
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

    DeleteHonorandAward = async (id:string) => {
        this.loading = true;
        try{
            await agent.HonorsandAwards.delete(id);
            runInAction(() => {
                this.honorandawardRegistry.delete(id);
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