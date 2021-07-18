using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedPjesemarresitPublikimet
    {
        
        public static async Task SeedDataPjesemarresiPublikimi (DataContext context)
        {
            if (context.PjesemarresitPublikimet.Any()) return;
            
            var pjesemarresitpublikimet = new List<PjesemarresiPublikimi>
            {
                new PjesemarresiPublikimi
                {
                    EmriIPjesemarresit = "Test Pjesemarresi Publikimi",
                    roli = "Test Pjesemarresi Publikimi"
                    
                    
                },
                
            };

            await context.PjesemarresitPublikimet.AddRangeAsync(pjesemarresitpublikimet);
            await context.SaveChangesAsync();
        }
    }
}