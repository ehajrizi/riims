using System;
using Domain;

namespace Application.Certifikimet
{
    public class CertifikimiDto
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