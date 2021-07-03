
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Certifikimi } from "../models/certifikimi";


export default class CertifikimiStore {
    certifikimiRegistry = new Map<string, Certifikimi>();
    selectedCertifikimi: Certifikimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get certifikimetByDate() {
        return Array.from(this.certifikimiRegistry.values()).sort((a, b) => 
        a.dataFillestare!.getTime()-b.dataFillestare!.getTime())
    }

    loadCertifikimet = async () => {
        this.loadingInitial = true;
        try {
            const certifikimet= await agent.Certifikimet.list();
            certifikimet.forEach(certifikimi => {
                this.setCertifikimi(certifikimi);
            })
            this.setLoadingInitial(false);    
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
            
        }
    }

    loadCertifikimi = async (id: string) => {
        let certifikimi = this.getCertifikimi(id);
        if (certifikimi) {
            this.selectedCertifikimi = certifikimi;
            return certifikimi;
        } else {
            this.loadingInitial = true;
            try {
                certifikimi = await agent.Certifikimet.details(id);
                this.setCertifikimi(certifikimi);
                runInAction(() => {
                    this.selectedCertifikimi = certifikimi;
                })
                this.setLoadingInitial(false);
                return certifikimi;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setCertifikimi = (certifikimi: Certifikimi) => {
        certifikimi.dataFillestare = new Date(certifikimi.dataFillestare!);
        certifikimi.dataPerfundimtare = new Date(certifikimi.dataPerfundimtare!);
        this.certifikimiRegistry.set(certifikimi.id, certifikimi);
    }

    private getCertifikimi = (id: string) => {
        return this.certifikimiRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createCertifikimi = async (certifikimi: Certifikimi) => {
        this.loading = true;
        try {
            await agent.Certifikimet.create(certifikimi);
            runInAction(() => {
                this.certifikimiRegistry.set(certifikimi.id, certifikimi);
                this.selectedCertifikimi = certifikimi;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction( () => {
                this.loading = false;
            })
        }
    }

    updateCertifikimi = async (certifikimi: Certifikimi) => {
        this.loading = true;
        try {
            await agent.Certifikimet.update(certifikimi);
            runInAction(() => {
                this.certifikimiRegistry.set(certifikimi.id, certifikimi);
                this.selectedCertifikimi = certifikimi;
                this.editMode = false;
                this.loading = false
            })

        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteCertifikimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Certifikimet.delete(id);
            runInAction(() => {
                this.certifikimiRegistry.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}