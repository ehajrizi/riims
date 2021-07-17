using System;
using Domain;

namespace Application.Gjuhet
{
    public class GjuhaDto
    {
        public Guid Id { get; set; }
        public string ZgjedhGjuha { get; set; }
        public string Folur { get; set; }
        public string Shkruar { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}