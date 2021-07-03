using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        // public string DisplayName { get; set; }
        // public string Bio { get; set; }
    }
}