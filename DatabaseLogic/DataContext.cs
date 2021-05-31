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
    }
}