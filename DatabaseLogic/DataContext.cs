using Domain;
using Microsoft.EntityFrameworkCore;

namespace DatabaseLogic
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Publikimi> Publikimet { get; set; }
        public DbSet<Eksperienca> Eksperiencat { get; set; }
        public DbSet<MbikeqyresiTemave> MbikeqyresitTemave { get; set; }
        public DbSet<Specializimi> Specializimet { get; set; }
        public DbSet<Edukimi> Edukimet { get; set; }
        public DbSet<Profili> Profilet { get; set; }
        public DbSet<Certifikimi> Certifikimet { get; set; }
        public DbSet<Projekti> Projektet { get; set; }
        public DbSet<Gjuha> Gjuhet { get; set; }
    }
}