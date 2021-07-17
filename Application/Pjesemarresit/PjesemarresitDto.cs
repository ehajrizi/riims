using System;
using Domain;

namespace Application.Pjesemarresit
{
    public class PjesemarresitDto
    {
        public Guid Id { get; set; }
        public string EmriIPjesemarresit { get; set; }
        public string roli { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}