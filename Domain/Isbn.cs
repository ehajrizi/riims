using System;
namespace Domain
{
    public class Isbn
    {
        public Guid Id { get; set; }
        public string LlojiNumrit { get; set; }
        public string Numri { get; set; }  
        public string PublikimId { get; set; }
        public Publikimi Publikimi { get; set; }
    }
}