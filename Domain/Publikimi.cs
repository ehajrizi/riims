using System;

namespace Domain
{
    public class Publikimi
    {
        public Guid Id{ get; set; }
        public string Titulli { get; set; }
        public string EmertimiEvent { get; set; }
        public DateTime Data { get; set; }//???
        public string Vendi { get; set; }
        public string Statusi { get; set; }//id (tabela nveti dmth)
        public string LlojiPublikimit { get; set; }//id
        public string Institucioni { get; set; }//id
        public string Departamenti { get; set; }//id
        public string Lenda { get; set; }//id
        public string Kategoria { get; set; }//shkon me id
        public string LinkuPublikimit { get; set; }
        public int VolumiFaqeve { get; set; }
        public string Referenca { get; set; }
        public bool AutorKryesor { get; set; }
    }
}