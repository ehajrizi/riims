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
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = " ",
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
                DataFillestare = "12 Oct 2011",
                DataPerfundimtare = "6 Sept 2013",
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
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = "19 Jan 2020",
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
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = "13 Aug 2019",
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
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = "13 Aug 2019",
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