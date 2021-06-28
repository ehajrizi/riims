using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace DatabaseLogic
{
    public class SeedCertifikimi
    {
        public static async Task SeedData(DataContext context)
	{
		if(context.Certifikimet.Any()) return;
		
		var certifikimet = new List<Certifikimi>
		{
			new Certifikimi
			{
			   Emri_Institucionit = "UBT",
			   Titulli = "CERTIFIKIMI1",
                Lokacioni = "Laggja Kalabria, Prishtine 10000",
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = " ",
                Pershkrimi ="Menaxhimi i fakultetit"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "Akademia e Shkencave",
			   Titulli = "CERTIFIKIMI2",
                Lokacioni = "Rr. Agim Ramadani, Prishtine 10000",
                DataFillestare = "12 Oct 2011",
                DataPerfundimtare = "6 Sept 2013",
                Pershkrimi ="Mirembajtje e sistemeve"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "TEST",
			   Titulli = "CERTIFIKIMI3",
                Lokacioni = "TEST",
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = "19 Jan 2020",
                Pershkrimi ="TEST"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "TEST2",
			   Titulli = "CERTIFIKIMI4",
                Lokacioni = "TEST2",
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = "13 Aug 2019",
                Pershkrimi ="TEST2"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "TEST3",
			   Titulli = "CERTIFIKIMI5",
                Lokacioni = "TEST3",
                DataFillestare = "12 Oct 2013",
                DataPerfundimtare = "13 Aug 2019",
                Pershkrimi ="TEST3"
			}

		};
		await context.Certifikimet.AddRangeAsync(certifikimet);
        await context.SaveChangesAsync();	
	}
    }
}