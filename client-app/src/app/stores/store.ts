import { createContext, useContext } from "react";
import EdukimiStore from "./edukimiStore";
import EksperiencaStore from "./eksperiencaStore";

interface Store{
    eksperiencaStore: EksperiencaStore
    edukimiStore: EdukimiStore
}

export const store: Store = {
    eksperiencaStore: new EksperiencaStore(),
    edukimiStore: new EdukimiStore()
}//qka ruhet nstore


export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
} //react hook, qka dojm me perdor 
//ku ruhen stores krejt qikjp store.ts