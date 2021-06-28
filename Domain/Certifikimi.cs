using System;

namespace Domain
{
    public class Certifikimi
    {
        public Guid Id { get; set; }

        public string Emri_Institucionit { get; set; }

        public string Titulli { get; set; }

        public string Lokacioni { get; set; }

        public string DataFillestare { get; set; }

        public string DataPerfundimtare { get; set; }

        public string Pershkrimi { get; set; }
    }
}