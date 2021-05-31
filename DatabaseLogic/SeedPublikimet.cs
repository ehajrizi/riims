using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedPublikimet
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Publikimet.Any()) return;
            
            var activities = new List<Publikimi>
            {
                new Publikimi
                {
                    Titulli = "Past Activity 1",
                    EmertimiEvent = "test",
                    Data = DateTime.Now.AddMonths(-2),
                    Vendi = "Prishtine",
                    Statusi = "test",
                    LlojiPublikimit = "test",
                    Institucioni = "UBT",
                    Departamenti = "cse",
                    Lenda = "SD",
                    Kategoria = "CS",
                    LinkuPublikimit = "testhtml",
                    VolumiFaqeve = 13,
                    Referenca = "test",
                    AutorKryesor = true,
                }
            };

            await context.Publikimet.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}