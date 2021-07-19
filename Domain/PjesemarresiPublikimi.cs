using System;

namespace Domain
{
    public class PjesemarresiPublikimi
    {   
        public Guid Id { get; set; }
        public string EmriIPjesemarresit { get; set; }
        public string roli { get; set; }
        public string PublikimId { get; set; }
        public Publikimi Publikimi { get; set; }
        
    }
}