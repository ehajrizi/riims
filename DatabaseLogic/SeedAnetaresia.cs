using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;

namespace DatabaseLogic
{
    public class SeedAnetaresia
    {
        public static async Task SeedDataAne(DataContext context)
        {
            if (context.Anetaresite.Any()) return;
            
            var anetaresite = new List<Anetaresia>
            {
                new Anetaresia
                {
                    EmriInstOrg = "UBT",
                    Pozita = "Test1",
                    Pershkrimi = "Test1"
                },
                new Anetaresia
                {
                    EmriInstOrg = "UBT",
                    Pozita = "Test2",
                    Pershkrimi = "Test2"
                },
                new Anetaresia
                {
                    EmriInstOrg = "UBT",
                    Pozita = "Test3",
                    Pershkrimi = "Test3"
                },
                new Anetaresia
                {
                    EmriInstOrg = "UBT",
                    Pozita = "Test4",
                    Pershkrimi = "Test4"
                },
            };

            await context.Anetaresite.AddRangeAsync(anetaresite);
            await context.SaveChangesAsync();
        }
    }
}