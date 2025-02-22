using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            using var scope = host.Services.CreateScope();

            var services = scope.ServiceProvider;

            try
            {
                var context = services.GetRequiredService<DataContext>();
                var userManager = services.GetRequiredService<UserManager<AppUser>>();
                await context.Database.MigrateAsync();
                await SeedPublikimet.SeedData(context);
                await SeedDataEksperiencat.SeedDataEks(context);
                await SeedMbikeqyresiTemave.SeedData(context);
                await SeedSpecializimet.SeedDataS(context);
                await SeedEdukimi.SeedDataEd(context);
                await SeedCertifikimi.SeedData(context);
                await SeedProjektet.SeedDataProjekti(context);
                await SeedGjuha.SeedDataGj(context);
                await SeedHonorandAward.SeedDataHA(context);
                await SeedAnetaresia.SeedDataAne(context);
                await SeedDonatoret.SeedDataDonatori(context);
                 await SeedPjesemarresit.SeedDataPjesemarresi(context);
                await SeedIsbn.SeedDataIsbn(context);
                await SeedUser.SeedDataUser(context, userManager);
                await SeedPjesemarresitPublikimet.SeedDataPjesemarresiPublikimi(context);
            }
            catch(Exception ex)
            {
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An error occured during migration");
            }

            await host.RunAsync();
        }
        

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
