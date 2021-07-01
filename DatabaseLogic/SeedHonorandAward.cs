using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;

namespace DatabaseLogic
{
    public class SeedHonorandAward
    {
        public static async Task SeedDataHA(DataContext context)
        {
            if (context.HonorsandAwards.Any()) return;
            
            var honorsandawards = new List<HonorandAward>
            {
                new HonorandAward
                {
                    Titulli = "Test",
                    Institucioni = "Test",
                    Muaji = 3,
                    Viti = DateTime.Now,
                    Pozita="test",
                    }
            };

            await context.HonorsandAwards.AddRangeAsync(honorsandawards);
            await context.SaveChangesAsync();
        }
    }
}