using System;
using Domain;

namespace Application.HonorsandAwards
{
    public class HonorsandAwardsDto
    {
        public Guid Id { get; set; }
        public string Titulli {get; set; }
        public string Institucioni {get; set; }
        public int Muaji {get; set; }
        public DateTime Viti {get; set; }
        public string Pozita {get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}