using System;

namespace Domain
{
    public class Donatori
    {
        public Guid Id { get; set; }
        public string EmriIDonatorit {get; set;}
        public string PershkrimiDonatorit {get; set;}
        public int KontributiIDhene { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
        
    }
}