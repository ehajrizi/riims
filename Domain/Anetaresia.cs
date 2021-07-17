using System;

namespace Domain
{
    public class Anetaresia
    {
        public Guid Id { get; set; }
        public string EmriInstOrg{ get; set; }
        public string Pozita{ get; set; }
        public string Pershkrimi{ get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}