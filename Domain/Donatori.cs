using System;

namespace Domain
{
    public class Donatori
    {
        public Guid Id { get; set; }
        public string EmriIDonatorit {get; set;}
        public string PershkrimiDonatorit {get; set;}
        public int KontributiIDhene { get; set; }
        public string ProjektId { get; set; }
        public Projekti Projekti { get; set; }
        
    }
}