import { createContext, useContext } from "react";
import EdukimiStore from "./edukimiStore";
import EksperiencaStore from "./eksperiencaStore";
import MbikeqyresiTemaveStore from "./mbikeqyresitemaveStore";
import PublikimiStore from "./publikimiStore";
import SpecializimiStore from "./specializimiStore";
import ProfiliStore from "./profiliStore";
import ProjektiStore from "./projektiStore";
import HonorandAwardStore from "./honorandawardStore";
import ModalStore from "./modalStore";


interface Store{
    eksperiencaStore: EksperiencaStore
    edukimiStore: EdukimiStore
    publikimiStore: PublikimiStore
    specializimiStore: SpecializimiStore
    mbikeqyresitemaveStore: MbikeqyresiTemaveStore
    profiliStore: ProfiliStore
    projektiStore: ProjektiStore
    honorandawardStore:HonorandAwardStore
    modalStore: ModalStore

}

export const store: Store = {
    eksperiencaStore: new EksperiencaStore(),
    edukimiStore: new EdukimiStore(),
    publikimiStore: new PublikimiStore(),
    specializimiStore: new SpecializimiStore(),
    mbikeqyresitemaveStore: new MbikeqyresiTemaveStore(),
    profiliStore: new ProfiliStore(),
    projektiStore: new ProjektiStore(),
    honorandawardStore: new HonorandAwardStore(),
    modalStore: new ModalStore(),


}




export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
} 