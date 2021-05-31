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
			}

		};
		await context.Eksperiencat.AddRangeAsync(eksperiencat);
        await context.SaveChangesAsync();	
	}

    }
}