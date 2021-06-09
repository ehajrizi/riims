import { createContext, useContext } from "react";
import EksperiencaStore from "./eksperiencaStore";

interface Store{
    eksperiencaStore: EksperiencaStore
}

export const store: Store = {
    eksperiencaStore: new EksperiencaStore()
}//qka ruhet nstore


export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
} //react hook, qka dojm me perdor 
//ku ruhen stores krejt qikjp store.ts