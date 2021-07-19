using System;

namespace Domain
{
    public class Pjesemarresi
    {
        public Guid Id { get; set; }
        public string EmriIPjesemarresit { get; set; }
        public string roli { get; set; }
        public string ProjektId { get; set; }
        public Projekti Projekti { get; set; }
        
    }
}