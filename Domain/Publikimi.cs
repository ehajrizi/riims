using System;

namespace Domain
{
    public class Publikimi
    {
        public Guid Id{ get; set; }
        public string Titulli { get; set; }
        public string EmertimiEvent { get; set; }
        public DateTime Data { get; set; }
        public string Vendi { get; set; }
        public string Statusi { get; set; }
        public string LlojiPublikimit { get; set; }
        public string Institucioni { get; set; }
        public string Departamenti { get; set; }
        public string Lenda { get; set; }
        public string Kategoria { get; set; }
        public string LinkuPublikimit { get; set; }
        public int VolumiFaqeve { get; set; }
        public string Referenca { get; set; }
        public bool AutorKryesor { get; set; }
    }
}