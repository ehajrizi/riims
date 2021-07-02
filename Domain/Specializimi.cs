using System;

namespace Domain

{
    public class Specializimi
    {
        public Guid Id { get; set; }

        public string EmriInstitucionit { get; set; }

        public string Titulli { get; set; }

        public string Lokacioni { get; set; }

        public DateTime DataFillestare { get; set; }

        public DateTime DataPerfundimtare { get; set; }

        public string Pershkrimi { get; set; }

    }
}