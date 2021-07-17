using System;

namespace Domain
{
    public class Gjuha
    {
        public Guid Id { get; set; }
        public string ZgjedhGjuha { get; set; }
        public string Folur { get; set; }
        public string Shkruar { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }

    }
}