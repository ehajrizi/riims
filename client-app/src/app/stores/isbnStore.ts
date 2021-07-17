import { makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import { Isbn } from "../models/isbn";


export default class IsbnStore{
    isbnRegistry = new Map<string, Isbn>();
    selectedIsbn: Isbn | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;


    constructor(){
        makeAutoObservable(this)
    }

    get isbntByNumri() {
        return Array.from(this.isbnRegistry.values()).sort((a, b) => (a.numri.localeCompare(b.numri))
        )
    }

    loadIsbnt = async () => {
        this.loadingInitial = true;
        try{
            const isbnt = await agent.Isbnt.list();
            isbnt.forEach(isbn =>{
                    this.setIsbn(isbn);
                  })
                  this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
                this.setLoadingInitial(false);
        }
    }

    loadIsbn = async (id:string) =>{
        let isbn = this.getIsbn(id);
        if(isbn){
            this.selectedIsbn = isbn;
            return isbn;
        }else{
            this.loadingInitial = true;
            try{
                isbn = await agent.Isbnt.details(id);
                this.setIsbn(isbn);
                runInAction(() => {
                    this.selectedIsbn = isbn;
                })
                this.setLoadingInitial(false);
                return isbn;
            }catch(error){
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setIsbn = (isbn:  Isbn) => {
        this.isbnRegistry.set(isbn.id, isbn);
    }

    private getIsbn = (id:string)=>{
        return this.isbnRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) =>{
        this.loadingInitial = state;
    }


    createIsbn = async (isbn:Isbn) => {
        this.loading = true;
        try{
            await agent.Isbnt.create(isbn);
            runInAction(() => {
                this.isbnRegistry.set(isbn.id,isbn);
                this.selectedIsbn = isbn;
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
    
    updateIsbn = async (isbn:Isbn) => {
        this.loading = true;
        try{
            await agent.Isbnt.update(isbn);
            runInAction(()=>{
                this.isbnRegistry.set(isbn.id,isbn);
                this.selectedIsbn = isbn;
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

    deleteIsbn = async (id:string) => {
        this.loading = true;
        try{
            await agent.Isbnt.delete(id);
            runInAction(() => {
                this.isbnRegistry.delete(id);
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