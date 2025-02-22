using System;

namespace Domain
{
    public class Certifikimi
    {
        public Guid Id { get; set; }
        public string Emri_Institucionit { get; set; }
        public string Titulli { get; set; }
        public string Lokacioni { get; set; }
        public DateTime DataFillestare { get; set; }
        public DateTime DataPerfundimtare { get; set; }
        public string Pershkrimi { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}