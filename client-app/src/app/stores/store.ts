import { createContext, useContext } from "react";
import EdukimiStore from "./edukimiStore";
import EksperiencaStore from "./eksperiencaStore";
import MbikeqyresiTemaveStore from "./mbikeqyresitemaveStore";
import PublikimiStore from "./publikimiStore";
import SpecializimiStore from "./specializimiStore";

interface Store{
    eksperiencaStore: EksperiencaStore
    edukimiStore: EdukimiStore
    publikimiStore: PublikimiStore
    specializimiStore: SpecializimiStore
    mbikeqyresitemaveStore: MbikeqyresiTemaveStore

}

export const store: Store = {
    eksperiencaStore: new EksperiencaStore(),
    edukimiStore: new EdukimiStore(),
    publikimiStore: new PublikimiStore(),
    specializimiStore: new SpecializimiStore(),
    mbikeqyresitemaveStore: new MbikeqyresiTemaveStore(),

}//qka ruhet nstore


export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
} //react hook, qka dojm me perdor 
//ku ruhen stores krejt qikjp store.ts