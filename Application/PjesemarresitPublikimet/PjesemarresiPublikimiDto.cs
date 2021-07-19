using System;
using Domain;

namespace Application.PjesemarresitPublikimet
{
    public class PjesemarresiPublikimiDto
    {
        public Guid Id { get; set; }
        public string EmriIPjesemarresit { get; set; }
        public string roli { get; set; }
        public string PublikimId { get; set; }
        public Publikimi Publikimi { get; set; }
    }
}