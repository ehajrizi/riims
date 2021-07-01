using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedDataEksperiencat
    {
        public static async Task SeedDataEks(DataContext context)
	{
		if(context.Eksperiencat.Any()) return;
		
		var eksperiencat = new List<Eksperienca>
		{
			new Eksperienca
			{
			    EmriInstitucionit = "UBT",
			    Titulli = "Dekane e SHKI-se",
                PunePrimare = true,
                Lokacioni = "Laggja Kalabria, Prishtine 10000",
                DataFillestare = DateTime.Now.AddMonths(-15),
                DataPerfundimtare = DateTime.Now.AddMonths(-10),
                Pershkrimi ="Menaxhimi i fakultetit",
                PersoniKontaktues = "Edmond Hajrizi",
                Email = "ehajrizi@ubt-uni.net",
                NumriTelefonit = "044834735"
			},
            new Eksperienca
			{
			   EmriInstitucionit = "Akademia e Shkencave",
			   Titulli = "Mbikeqyres i sistemeve",
                PunePrimare = true,
                Lokacioni = "Rr. Agim Ramadani, Prishtine 10000",
                DataFillestare = DateTime.Now.AddMonths(-9),
                DataPerfundimtare = DateTime.Now.AddMonths(-2),
                Pershkrimi ="Mirembajtje e sistemeve",
                PersoniKontaktues = "Filan Fisteku",
                Email = "ffisteku@gmail.com",
                NumriTelefonit = "044812788"
			},
            new Eksperienca
			{
			   EmriInstitucionit = "TEST",
			   Titulli = "TEST",
                	   PunePrimare = false,
                Lokacioni = "TEST",
                DataFillestare = DateTime.Now.AddMonths(-6),
                DataPerfundimtare = DateTime.Now.AddMonths(-1),
                Pershkrimi ="TEST",
                PersoniKontaktues = "TEST",
                Email = "TEST",
                NumriTelefonit = "TEST"
			},
            new Eksperienca
			{
			   EmriInstitucionit = "TEST2",
			   Titulli = "TEST2",
                PunePrimare = true,
                Lokacioni = "TEST2",
                DataFillestare = DateTime.Now.AddMonths(-18),
                DataPerfundimtare = DateTime.Now.AddMonths(-17),
                Pershkrimi ="TEST2",
                PersoniKontaktues = "TEST2",
                Email = "TEST2",
                NumriTelefonit = "TEST2"
			},
            new Eksperienca
			{
			   EmriInstitucionit = "TEST3",
			   Titulli = "TEST3",
                PunePrimare = true,
                Lokacioni = "TEST3",
                DataFillestare = DateTime.Now.AddMonths(-1),
                DataPerfundimtare = DateTime.Now,
                Pershkrimi ="TEST3",
                PersoniKontaktues = "TEST3",
                Email = "TEST3",
                NumriTelefonit = "TEST3"
			}

		};
		await context.Eksperiencat.AddRangeAsync(eksperiencat);
        await context.SaveChangesAsync();	
	}

    }
}