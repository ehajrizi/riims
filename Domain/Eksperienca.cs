using System;

namespace Domain
{
    public class Eksperienca
    {
        public Guid Id { get; set; }

        public string EmriInstitucionit { get; set; }

        public string Titulli { get; set; }

        public bool PunePrimare { get; set; }

        public string Lokacioni { get; set; }

        public DateTime DataFillestare { get; set; }

        public DateTime DataPerfundimtare { get; set; }

        public string Pershkrimi { get; set; }

        public string PersoniKontaktues { get; set; }

        public string Email { get; set; }

        public string NumriTelefonit { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}