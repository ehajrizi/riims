using System;

namespace Domain
{
    public class MbikeqyresiTemave
    {
        public Guid Id { get; set; }
        public string TitulliTemes {get; set; }
        public string Studenti {get; set; }
        public int Muaji {get; set; }
        public DateTime Viti {get; set; }
        public string Institucioni { get; set; }
        public string Fakulteti {get; set; }
        public string NiveliAkademik {get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}