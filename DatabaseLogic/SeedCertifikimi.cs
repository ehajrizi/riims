using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using System;

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
                DataFillestare = DateTime.Now,
                DataPerfundimtare = DateTime.Now,
                Pershkrimi ="Menaxhimi i fakultetit"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "Akademia e Shkencave",
			   Titulli = "CERTIFIKIMI2",
                Lokacioni = "Rr. Agim Ramadani, Prishtine 10000",
                DataFillestare = DateTime.Now,
                DataPerfundimtare = DateTime.Now,
                Pershkrimi ="Mirembajtje e sistemeve"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "TEST",
			   Titulli = "CERTIFIKIMI3",
                Lokacioni = "TEST",
                DataFillestare = DateTime.Now,
                DataPerfundimtare = DateTime.Now,
                Pershkrimi ="TEST"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "TEST2",
			   Titulli = "CERTIFIKIMI4",
                Lokacioni = "TEST2",
                DataFillestare = DateTime.Now,
                DataPerfundimtare = DateTime.Now,
                Pershkrimi ="TEST2"
			},
            new Certifikimi
			{
			   Emri_Institucionit = "TEST3",
			   Titulli = "CERTIFIKIMI5",
                Lokacioni = "TEST3",
                DataFillestare = DateTime.Now,
                DataPerfundimtare = DateTime.Now,
                Pershkrimi ="TEST3"
			}

		};
		await context.Certifikimet.AddRangeAsync(certifikimet);
        await context.SaveChangesAsync();	
	}
    }
}