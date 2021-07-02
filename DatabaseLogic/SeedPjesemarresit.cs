using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedPjesemarresit
    {
        public static async Task SeedDataPjesemarresi(DataContext context)
        {
            if (context.Pjesemarresit.Any()) return;
            
            var pjesemarresit = new List<Pjesemarresi>
            {
                new Pjesemarresi
                {
                    EmriIPjesemarresit = "Test Pjesemarresi",
                    roli = "Test Pjesemarresi"
                    
                    
                },
            };

            await context.Pjesemarresit.AddRangeAsync(pjesemarresit);
            await context.SaveChangesAsync();
        }
    }
}