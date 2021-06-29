using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedProjektet
    {
        public static async Task SeedDataProjekti(DataContext context)
        {
            if (context.Projektet.Any()) return;
            
            var projektet = new List<Projekti>
            {
                new Projekti
                {
                    EmriProjektit = "Test1",
                    Pershkrimi = "test1",
                    Lokacioni = "Prishtine",
                    DataFillimit = DateTime.Now,
                    DataMbarimit = DateTime.Now,
                    Buxheti = 1000,
                    EmriKlientit = "John Doe",
                    Institucioni = "UBT"
                },
            };

            await context.Projektet.AddRangeAsync(projektet);
            await context.SaveChangesAsync();
        }
    }
}