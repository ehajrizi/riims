using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;

namespace DatabaseLogic
{
    public class SeedIsbn
    {
        public static async Task SeedDataIsbn(DataContext context)
        {
            if (context.Isbnt.Any()) return;
            
            var isbnt = new List<Isbn>
            {
                new Isbn
                {
                    LlojiNumrit="Isbn",
                    Numri="1234563"
                },
                
            };

            await context.Isbnt.AddRangeAsync(isbnt);
            await context.SaveChangesAsync();
        }
    }
}