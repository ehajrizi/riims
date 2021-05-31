using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;

namespace DatabaseLogic
{
    public class SeedProfili
    {
        public static async Task SeedDataP(DataContext context)
        {
            if (context.Profilet.Any()) return;
            
            var profilet = new List<Profili>
            {
                new Profili
                {
                    TitulliShkencor = "PhD",
                    Emri = "Albana",
                    EmriIMesem = "Qamil",
                    Mbiemri = "Hajdini",
                    DataELindjes = "01/10/2002",
                    VendiILindjes = "Prishtine",
                    ShtetiILindjes = "Kosove",
                    NrTelefonit = "044123456",
                    Gjinia = 'F',
                    FotoUrl = "https://pbs.twimg.com/profile_images/485045592800772098/Ecv0A9gR.png",
                },
                new Profili
                {
                    TitulliShkencor = "test",
                    Emri = "test",
                    EmriIMesem = "test",
                    Mbiemri = "test",
                    DataELindjes = "test",
                    VendiILindjes = "test",
                    ShtetiILindjes = "test",
                    NrTelefonit = "test",
                    Gjinia = 'F',
                    FotoUrl = "test",
                }
            };

            await context.Profilet.AddRangeAsync(profilet);
            await context.SaveChangesAsync();
        }
    }
}