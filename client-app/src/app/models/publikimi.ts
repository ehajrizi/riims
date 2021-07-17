export interface Publikimi {
    id:              string;
    titulli:         string;
    emertimiEvent:   string;
    data:            Date | null;
    viti:            Date | null;
    vendi:           string;
    statusi:         string;
    llojiPublikimit: string;
    institucioni:    string;
    departamenti:    string;
    lenda:           string;
    kategoria:       string;
    linkuPublikimit: string;
    volumiFaqeve:    number;
    referenca:       string;
    autorKryesor:    boolean;
    useriId:         string;
}
