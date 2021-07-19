using System;
using Domain;

namespace Application.Isbnt
{
    public class IsbnDto
    {
        public Guid Id { get; set; }
        public string LlojiNumrit { get; set; }
        public string Numri { get; set; }
        public string PublikimId { get; set; }
        public Publikimi Publikimi { get; set; }
    }
}