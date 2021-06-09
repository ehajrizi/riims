import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { MbikeqyresiTemave } from "../models/mbikeqyresitemave";


export default class MbikeqyresiTemaveStore {
    mbikeqyresitemaveRegistry = new Map<string, MbikeqyresiTemave>();
    selectedMbikeqyresiTemave: MbikeqyresiTemave | undefined = undefined;
    editModeMbikeqyresiTemave = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get mbikeqyresitemaveByStudenti() {
        return Array.from(this.mbikeqyresitemaveRegistry.values()).sort((a, b) => (a.studenti.localeCompare(b.studenti))
        )
    }

    loadMbikeqyresittemave = async () => {
        this.loadingInitial = true;
        try {
            const mbikeqyresittemave = await agent.MbikeqyresitTemave.list();
            mbikeqyresittemave.forEach(mbikeqyresitemave => {
                this.setMbikeqyresiTemave(mbikeqyresitemave);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadMbikeqyresiTemave = async (id: string) => {
        let mbikeqyresitemave = this.getMbikeqyresiTemave(id);
        if (mbikeqyresitemave) {
            this.selectedMbikeqyresiTemave = mbikeqyresitemave;
            return mbikeqyresitemave;
        } else {
            this.loadingInitial = true;
            try {
                mbikeqyresitemave = await agent.MbikeqyresitTemave.details(id);
                this.setMbikeqyresiTemave(mbikeqyresitemave);
                runInAction(() => {
                    this.selectedMbikeqyresiTemave = mbikeqyresitemave;
                })
                this.setLoadingInitial(false);
                return mbikeqyresitemave;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }
    private setMbikeqyresiTemave = (mbikeqyresitemave: MbikeqyresiTemave) => {
        this.mbikeqyresitemaveRegistry.set(mbikeqyresitemave.id, mbikeqyresitemave)
    }

    private getMbikeqyresiTemave = (id: string) => {
        return this.mbikeqyresitemaveRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createMbikeqyresiTemave = async (mbikeqyresitemave: MbikeqyresiTemave) => {
        this.loading = true;
        try {
            await agent.MbikeqyresitTemave.create(mbikeqyresitemave);
            runInAction(() => {
                this.mbikeqyresitemaveRegistry.set(mbikeqyresitemave.id, mbikeqyresitemave)
                this.selectedMbikeqyresiTemave = mbikeqyresitemave;
                this.editModeMbikeqyresiTemave = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateMbikeqyresiTemave = async (mbikeqyresitemave: MbikeqyresiTemave) => {
        this.loading = true;
        try {
            await agent.MbikeqyresitTemave.update(mbikeqyresitemave);
            runInAction(() => {
                this.mbikeqyresitemaveRegistry.set(mbikeqyresitemave.id, mbikeqyresitemave);
                this.selectedMbikeqyresiTemave = mbikeqyresitemave;
                this.editModeMbikeqyresiTemave = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteMbikeqyresiTemave = async (id: string) => {
        this.loading = true;
        try {
            await agent.MbikeqyresitTemave.delete(id);
            runInAction(() => {
                this.mbikeqyresitemaveRegistry.delete(id);
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
