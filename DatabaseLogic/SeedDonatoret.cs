using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedDonatoret
    {
        public static async Task SeedDataDonatori(DataContext context)
        {
            if (context.Donatoret.Any()) return;
            
            var donatoret = new List<Donatori>
            {
                new Donatori
                {
                    EmriIDonatorit = "Test1",
                    PershkrimiDonatorit = "test1",
                    KontributiIDhene =10000
                    
                },
            };

            await context.Donatoret.AddRangeAsync(donatoret);
            await context.SaveChangesAsync();
        }
    }
}