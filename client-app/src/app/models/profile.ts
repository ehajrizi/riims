import { User } from "./user";

export interface UserProfile {
    id: string;
    titulliShkencor: string;
    emri:string;
    emriMesem?: string | null;
    mbiemri: string;
    dateLindja: Date;
    vendlindja: string;
    shtetiILindjes: string;
    gjinia: string;
    roli: string;
    rrugaCurrent: string;
    qytetiCurrent: string;
    zipKodiCurrent: string;
    shtetiCurrent: string;
    pershkrimi?: string | null;
    linkedIn?: string | null;
    phoneNumber: string
}

export class UserProfile implements UserProfile {
    constructor(user: User) {   
        this.id = user.id;
        this.emri = user.emri!;
        this.titulliShkencor = user.titulliShkencor!;
        this.emriMesem = user.emriMesem;
        this.mbiemri = user.mbiemri!;
        this.dateLindja = user.datelindja!;
        this.gjinia = user.gjinia!;
        this.shtetiILindjes = user.shtetiLindjes!;
        this.vendlindja = user.vendlindja!;
        this.roli = user.roli!;
        this.rrugaCurrent = user.rrugaCurrent!;
        this.zipKodiCurrent = user.zipKodiCurrent!;
        this.qytetiCurrent = user.qytetiCurrent!;
        this.shtetiCurrent = user.shtetiCurrent!;
        this.linkedIn = user.linkedIn;
        this.pershkrimi = user.pershkrimi;
        this.phoneNumber = user.phoneNumber!
    }
}