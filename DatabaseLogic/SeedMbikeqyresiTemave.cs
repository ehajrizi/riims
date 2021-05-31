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
                    TitulliTemes = "Past Activity 1",
                    Studenti = "test",
                    Muaji = "Shtator",
                    Viti = "2019",
                    Departamenti = "test",
                    NiveliAkademik = "Bsc",
                }
            };

            await context.MbikeqyresitTemave.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}