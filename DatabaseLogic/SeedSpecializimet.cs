using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedSpecializimet
    {
        public static async Task SeedDataS(DataContext context)
        {
            if (context.Specializimet.Any()) return;
            
            var specializimet = new List<Specializimi>
            {
                new Specializimi
                {
                    EmriInstitucionit= "UBT",
                    Titulli = "Specializimi 1",
                    Lokacioni = "Prishtine",
                    DataFillestare = DateTime.Now.AddMonths(-16),
                    DataPerfundimtare = DateTime.Now.AddMonths(-10),
                    Pershkrimi = "Specializimi i pare"
                },
		        new Specializimi
                {
                    EmriInstitucionit= "UBT",
                    Titulli = "Specializimi 2",
                    Lokacioni = "Prishtine",
                    DataFillestare = DateTime.Now.AddMonths(-16),
                    DataPerfundimtare = DateTime.Now.AddMonths(-10),
                    Pershkrimi = "Specializimi i dyte"
                },
		        new Specializimi
                {
                    EmriInstitucionit= "UBT",
                    Titulli = "Specializimi 3",
                    Lokacioni = "Prishtine",
                   DataFillestare = DateTime.Now.AddMonths(-16),
                    DataPerfundimtare = DateTime.Now.AddMonths(-10),
                    Pershkrimi = "Specializimi i trete"
                },
                new Specializimi
                {
                    EmriInstitucionit= "UBT",
                    Titulli = "Specializimi 4",
                    Lokacioni = "Prishtine",
                    DataFillestare = DateTime.Now.AddMonths(-16),
                    DataPerfundimtare = DateTime.Now.AddMonths(-10),
                    Pershkrimi = "Specializimi i katert"
                }
               
            };

            await context.Specializimet.AddRangeAsync(specializimet);
            await context.SaveChangesAsync();
        }
    }
}