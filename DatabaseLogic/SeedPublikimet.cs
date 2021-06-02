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
                    Titulli = "Test1",
                    EmertimiEvent = "test1",
                    Data = DateTime.Now,
                    Vendi = "Prishtine",
                    Statusi = "test1",
                    LlojiPublikimit = "test1",
                    Institucioni = "UBT",
                    Departamenti = "cse",
                    Lenda = "SD",
                    Kategoria = "CS",
                    LinkuPublikimit = "testhtml1",
                    VolumiFaqeve = 13,
                    Referenca = "test1",
                    AutorKryesor = true,
                },
                new Publikimi
                {
                    Titulli = "Testi2",
                    EmertimiEvent = "test2",
                    Data = DateTime.Now,
                    Vendi = "Prishtine",
                    Statusi = "test2",
                    LlojiPublikimit = "test2",
                    Institucioni = "UBT",
                    Departamenti = "cse",
                    Lenda = "SD",
                    Kategoria = "CS",
                    LinkuPublikimit = "testhtml2",
                    VolumiFaqeve = 13,
                    Referenca = "test2",
                    AutorKryesor = true,
                },
                new Publikimi
                {
                    Titulli = "Test3",
                    EmertimiEvent = "test3",
                    Data = DateTime.Now,
                    Vendi = "Prishtine",
                    Statusi = "test3",
                    LlojiPublikimit = "test3",
                    Institucioni = "UBT",
                    Departamenti = "cse",
                    Lenda = "SD",
                    Kategoria = "CS",
                    LinkuPublikimit = "testhtml3",
                    VolumiFaqeve = 13,
                    Referenca = "test3",
                    AutorKryesor = true,
                }
            };

            await context.Publikimet.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}