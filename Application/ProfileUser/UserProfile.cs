using System;
using Domain;

namespace Application.ProfileUser
{
    public class UserProfile
    {
        // public Guid Id { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public string EmriMesem { get; set; }
        public char Gjinia { get; set; }
        public string TitulliShkencor { get; set; }
        public string Roli { get; set; }
        public DateTime Datelindja { get; set; }
        public string Vendlindja { get; set; }
        public string ShtetiLindjes { get; set; }
        public string RrugaCurrent { get; set; }
        public string QytetiCurrent { get; set; }
        public int ZipKodiCurrent { get; set; }
        public string ShtetiCurrent { get; set; }
        public string Pershkrimi { get; set; }
        public string LinkedIn { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

        public string PhotoUrl { get; set; }

        public string Image {get;set;}

       
    }
}