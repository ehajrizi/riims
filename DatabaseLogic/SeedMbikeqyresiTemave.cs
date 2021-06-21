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
                    Muaji = 10,
                    Viti = 2019,
                    Institucioni ="Ubt",
                    Fakulteti = "Shkenca Kompjuterike dhe Inxhinieri",
                    NiveliAkademik = "Bsc",
                },
                new MbikeqyresiTemave
                {
                    TitulliTemes = "Test1",
                    Studenti = "test",
                    Muaji = 1,
                    Viti = 2019,
                    Institucioni ="Ubt",
                    Fakulteti = "test",
                    NiveliAkademik = "Bsc",
                },
                new MbikeqyresiTemave
                {
                    TitulliTemes = "Test2",
                    Studenti = "test2",
                    Muaji = 9,
                    Viti = 2019,
                    Institucioni ="Ubt",
                    Fakulteti = "test2",
                    NiveliAkademik = "Bsc",
                },
                new MbikeqyresiTemave
                {
                    TitulliTemes = "Test3",
                    Studenti = "test3",
                    Muaji = 2,
                    Viti = 2019,
                    Institucioni ="Ubt",
                    Fakulteti = "test3",
                    NiveliAkademik = "Bsc",
                }
            };

            await context.MbikeqyresitTemave.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}