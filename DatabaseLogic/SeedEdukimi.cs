using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;

namespace DatabaseLogic
{
    public class SeedEdukimi
    {
        public static async Task SeedDataEd(DataContext context)
        {
            if (context.Edukimet.Any()) return;
            
            var edukimet = new List<Edukimi>
            {
                new Edukimi
                {
                    Emri_i_Institucionit = "UBT",
                    Titulli = "test",
                    Fusha_e_Studimit = "Shkenca Kompjuterike dhe Inxhinieri",
                    Lokacioni = "Prishtine",
                    DataFillestare = DateTime.Now.AddMonths(-15),
                    DataPerfundimtare = DateTime.Now.AddMonths(-10),
                    Pershkrimi = "test",
                },
                new Edukimi
                {
                    Emri_i_Institucionit = "test2",
                    Titulli = "test2",
                    Fusha_e_Studimit = "test2",
                    Lokacioni = "test2",
                    DataFillestare = DateTime.Now.AddMonths(-9),
                    DataPerfundimtare = DateTime.Now.AddMonths(-2),
                    Pershkrimi = "test2",
                },
                new Edukimi
                {
                    Emri_i_Institucionit = "test3",
                    Titulli = "test3",
                    Fusha_e_Studimit = "test3",
                    Lokacioni = "test3",
                    DataFillestare = DateTime.Now.AddMonths(-5),
                    DataPerfundimtare = DateTime.Now.AddMonths(-3),
                    Pershkrimi = "test3",
                },
                new Edukimi
                {
                    Emri_i_Institucionit = "test4",
                    Titulli = "test4",
                    Fusha_e_Studimit = "test4",
                    Lokacioni = "test4",
                    DataFillestare = DateTime.Now.AddMonths(-3),
                    DataPerfundimtare = DateTime.Now,
                    Pershkrimi = "test4",
                }
            };

            await context.Edukimet.AddRangeAsync(edukimet);
            await context.SaveChangesAsync();
        }
    }
}