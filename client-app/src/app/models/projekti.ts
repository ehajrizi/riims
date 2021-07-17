export interface Projekti {
    id: string;
    emriProjektit: string;
    pershkrimi: string;
    lokacioni: string;
    dataFillimit: Date | null;
    dataMbarimit: Date | null;
    buxheti: number;
    emriKlientit: string;
    institucioni: string;
    useriId: string;
}