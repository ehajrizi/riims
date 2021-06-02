using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;


namespace DatabaseLogic
{
    public class SeedMbikeqyresiTemave
    {
         public static async Task SeedData(DataContext context)
        {
            if (context.MbikeqyresitTemave.Any()) return;
            
            var activities = new List<MbikeqyresiTemave>
            {
                 new MbikeqyresiTemave
                {
                    TitulliTemes = "Roli i kompjutereve ne jeten e perditeshme",
                    Studenti = "Gertiana Sojeva",
                    Muaji = "Shtator",
                    Viti = "2019",
                    Departamenti = "Shkenca Kompjuterike dhe Inxhinieri",
                    NiveliAkademik = "Bsc",
                },
                new MbikeqyresiTemave
                {
                    TitulliTemes = "Test1",
                    Studenti = "test",
                    Muaji = "Shtator",
                    Viti = "2019",
                    Departamenti = "test",
                    NiveliAkademik = "Bsc",
                },
                new MbikeqyresiTemave
                {
                    TitulliTemes = "Test2",
                    Studenti = "test2",
                    Muaji = "Shtator",
                    Viti = "2019",
                    Departamenti = "test2",
                    NiveliAkademik = "Bsc",
                },
                new MbikeqyresiTemave
                {
                    TitulliTemes = "Test3",
                    Studenti = "test3",
                    Muaji = "Shtator",
                    Viti = "2019",
                    Departamenti = "test3",
                    NiveliAkademik = "Bsc",
                }
            };

            await context.MbikeqyresitTemave.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}