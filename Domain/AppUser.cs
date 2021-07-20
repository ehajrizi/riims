using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace Domain
{
    public class AppUser : IdentityUser
    {
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
        public ICollection<Publikimi> Publikimet { get; set; }
        public ICollection<Eksperienca> Eksperiencat { get; set; }
        public ICollection<Anetaresia> Anetaresite { get; set; }
        public ICollection<Certifikimi> Certifikimet { get; set; }
        public ICollection<Edukimi> Edukimi { get; set; }
        public ICollection<Gjuha> Gjuhet { get; set; }
        public ICollection<HonorandAward> HonorsandAwards { get; set; }
        public ICollection<MbikeqyresiTemave> MbikeqyresiTemave { get; set; }
        public ICollection<PjesemarresiPublikimi> PjesemarresitPublikimet { get; set; }
        public ICollection<Projekti> Projektet { get; set; }
        public ICollection<Specializimi> Specializimet { get; set; }

    }
}