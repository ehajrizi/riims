using System;
using Domain;

namespace Application.Projektet
{
    public class ProjektiDto
    {
        public Guid Id { get; set; }
        public string EmriProjektit { get; set; }
        public string Pershkrimi { get; set; }
        public string Lokacioni { get; set; }
        public DateTime DataFillimit { get; set; }
        public DateTime DataMbarimit { get; set; }
        public int Buxheti { get; set; }
        public string EmriKlientit { get; set; }
        public string Institucioni { get; set; }
        public string UseriId { get; set; }
        public AppUser User { get; set; }
    }
}