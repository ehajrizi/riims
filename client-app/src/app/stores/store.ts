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
import GjuhaStore from "./gjuhaStore";
import CertifikimiStore from "./certifikimiStore";
import PjesemarresiStore from "./pjesemarresiStore";
import DonatoriStore from "./donatoriStore";
import UserStore from "./userStore";




interface Store{
    eksperiencaStore: EksperiencaStore
    edukimiStore: EdukimiStore
    certifikimiStore: CertifikimiStore
    publikimiStore: PublikimiStore
    specializimiStore: SpecializimiStore
    mbikeqyresitemaveStore: MbikeqyresiTemaveStore
    profiliStore: ProfiliStore
    projektiStore: ProjektiStore
    anetaresiaStore: AnetaresiaStore
    honorandawardStore:HonorandAwardStore
    gjuhaStore:GjuhaStore
    modalStore: ModalStore
    pjesemarresiStore: PjesemarresiStore
    donatoriStore: DonatoriStore
    userStore: UserStore

    
}

export const store: Store = {
    eksperiencaStore: new EksperiencaStore(),
    edukimiStore: new EdukimiStore(),
    certifikimiStore: new CertifikimiStore(),
    publikimiStore: new PublikimiStore(),
    specializimiStore: new SpecializimiStore(),
    mbikeqyresitemaveStore: new MbikeqyresiTemaveStore(),
    profiliStore: new ProfiliStore(),
    projektiStore: new ProjektiStore(),
    anetaresiaStore: new AnetaresiaStore(),
    honorandawardStore: new HonorandAwardStore(),
    gjuhaStore: new GjuhaStore(),
    modalStore: new ModalStore(),
    pjesemarresiStore: new PjesemarresiStore(),
    donatoriStore: new DonatoriStore(),
    userStore: new UserStore()
}




export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
} 