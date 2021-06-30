using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;

namespace DatabaseLogic
{
    public class SeedGjuha
    {
        public static async Task SeedDataGj(DataContext context)
        {
            if (context.Gjuhet.Any()) return;
            
            var gjuhet = new List<Gjuha>
            {
                new Gjuha
                {
                    ZgjedhGjuha = "Shqip",
                    Folur = "Shkelqyeshem (C2)",
                    Shkruar = "Shkelqyeshem (C2)"
                },
                new Gjuha
                {
                    ZgjedhGjuha = "English",
                    Folur = "Shume mire (C1)",
                    Shkruar = "Mire (B2)"
                },
                new Gjuha
                {
                    ZgjedhGjuha = "German",
                    Folur = "Mjaftueshem (B1)",
                    Shkruar = "Kuptoj (A2)"
                },
                new Gjuha
                {
                    ZgjedhGjuha = "French",
                    Folur = "Kuptoj (A2)",
                    Shkruar = "Dobet (A1)"
                }
            };

            await context.Gjuhet.AddRangeAsync(gjuhet);
            await context.SaveChangesAsync();
        }
    }
}