using System;

namespace Domain
{
    public class Edukimi
    {
        public Guid Id { get; set; }
        public string Emri_i_Institucionit { get; set; }
        public string Titulli { get; set; }
        public string Fusha_e_Studimit { get; set; }
        public string Lokacioni { get; set; }
        public DateTime DataFillestare { get; set; }
        public DateTime DataPerfundimtare { get; set; }
        public string Pershkrimi { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}