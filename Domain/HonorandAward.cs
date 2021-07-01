using System;

namespace Domain
{
    public class HonorandAward
    {
        public Guid Id { get; set; }
        public string Titulli {get; set; }
        public string Institucioni {get; set; }
        public int Muaji {get; set; }
        public DateTime Viti {get; set; }
        public string Pozita {get; set; }
    }
}