import { createContext, useContext } from "react";
import EdukimiStore from "./edukimiStore";
import EksperiencaStore from "./eksperiencaStore";
import PublikimiStore from "./publikimiStore";

interface Store{
    eksperiencaStore: EksperiencaStore
    edukimiStore: EdukimiStore
    publikimiStore: PublikimiStore
}

export const store: Store = {
    eksperiencaStore: new EksperiencaStore(),
    edukimiStore: new EdukimiStore(),
    publikimiStore: new PublikimiStore()
}//qka ruhet nstore


export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
} //react hook, qka dojm me perdor 
//ku ruhen stores krejt qikjp store.ts