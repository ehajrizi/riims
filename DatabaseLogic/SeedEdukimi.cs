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
                    DataFillestare = "01/10/2019",
                    DataPerfundimtare = "01/06/2022",
                    Pershkrimi = "test",
                },
                new Edukimi
                {
                    Emri_i_Institucionit = "test2",
                    Titulli = "test2",
                    Fusha_e_Studimit = "test2",
                    Lokacioni = "test2",
                    DataFillestare = "test2",
                    DataPerfundimtare = "test2",
                    Pershkrimi = "test2",
                },
                new Edukimi
                {
                    Emri_i_Institucionit = "test3",
                    Titulli = "test3",
                    Fusha_e_Studimit = "test3",
                    Lokacioni = "test3",
                    DataFillestare = "test3",
                    DataPerfundimtare = "test3",
                    Pershkrimi = "test3",
                },
                new Edukimi
                {
                    Emri_i_Institucionit = "test4",
                    Titulli = "test4",
                    Fusha_e_Studimit = "test4",
                    Lokacioni = "test4",
                    DataFillestare = "test4",
                    DataPerfundimtare = "test4",
                    Pershkrimi = "test4",
                }
            };

            await context.Edukimet.AddRangeAsync(edukimet);
            await context.SaveChangesAsync();
        }
    }
}