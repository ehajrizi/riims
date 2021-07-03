using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatabaseLogic;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace DatabaseLogic
{
    public class SeedUser
    {
        public static async Task SeedDataUser(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any()) 
            {
                var users = new List<AppUser>
                {
                    new AppUser{Emri = "Lidra", Mbiemri = "Kamberi", UserName="lidrak", Email = "lidra@test.com"},
                    new AppUser{Emri = "Flutura", Mbiemri = "Hundozi", UserName="fluturah", Email = "flutura@test.com"},
                    new AppUser{Emri = "Rinesa", Mbiemri = "Rafuna", UserName="rinesar", Email = "rinesar@test.com"},
                    new AppUser{Emri = "Albana", Mbiemri = "Hajdini", UserName="albanah", Email = "albana@test.com"},
                    new AppUser{Emri = "Elita", Mbiemri = "Hajrizi", UserName="elitah", Email = "elita@test.com"},
                    new AppUser{Emri = "Rinesa", Mbiemri = "Avdyli", UserName="rinesaa", Email = "rinesaa@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            
            await context.SaveChangesAsync();
            
        }
    }
}