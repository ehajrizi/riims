import { createContext, useContext } from "react";
import EdukimiStore from "./edukimiStore";
import EksperiencaStore from "./eksperiencaStore";
import MbikeqyresiTemaveStore from "./mbikeqyresitemaveStore";
import SpecializimiStore from "./specializimiStore";
import ProfiliStore from "./profiliStore";
import ProjektiStore from "./projektiStore";
import AnetaresiaStore from "./anetaresiaStore";
import HonorandAwardStore from "./honorandawardStore";
import ModalStore from "./modalStore";
import PublikimiStore from "./publikimiStore";


interface Store{
    eksperiencaStore: EksperiencaStore
    edukimiStore: EdukimiStore
    publikimiStore: PublikimiStore
    specializimiStore: SpecializimiStore
    mbikeqyresitemaveStore: MbikeqyresiTemaveStore
    profiliStore: ProfiliStore
    projektiStore: ProjektiStore
    anetaresiaStore: AnetaresiaStore
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
    anetaresiaStore: new AnetaresiaStore(),
    honorandawardStore: new HonorandAwardStore(),
    modalStore: new ModalStore(),
}




export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
} 