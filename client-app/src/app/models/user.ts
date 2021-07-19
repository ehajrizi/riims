export interface User {
    id: string;
    emri?: string;
    mbiemri?: string;
    token: string;
    username: string | null;
    image?: string;
    emriMesem?: string | null;
    gjinia?: string;
    titulliShkencor?: string;
    datelindja?: Date | null;
    vendlindja?: string;
    shtetiLindjes?: string;
    rrugaCurrent?: string;
    qytetiCurrent?: string;
    zipKodiCurrent?: string;
    shtetiCurrent?: string;
    pershkrimi?: string | null;
    linkedIn?: string | null;
    phoneNumber?: string;
    roli?: string;
    email: string;
}

export interface UserFormValues {
    email: string;
    password: string;
    emri?: string;
    mbiemri?: string;
    emriMesem?: string;
    gjinia?: string;
    titulliShkencor?: string;
    datelindja?: Date | null;
    vendlindja?: string;
    shtetiLindjes?: string;
    rrugaCurrent?: string;
    qytetiCurrent?: string;
    zipKodiCurrent?: string;
    shtetiCurrent?: string;
    pershkrimi?: string;
    linkedIn?: string;
    phoneNumber?: string;
    confirmPassword?: string;
    roli?: string;
}