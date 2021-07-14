using System.ComponentModel.DataAnnotations;
using System;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Emri { get; set; }

        

        [Required]
        public string Mbiemri { get; set; }


        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }  

        public string EmriMesem { get; set; }

        [Required]
        public char Gjinia { get; set; }
        
        [Required]
        public string TitulliShkencor { get; set; }

        [Required]
        public string ConfirmPassword { get; set; }

        [Required]
        public DateTime Datelindja { get; set; }

        [Required]
        public string Vendlindja { get; set; }

        [Required]
        public string ShtetiLindjes { get; set; }

        [Required]
        public string RrugaCurrent { get; set; }

        [Required]
        public string QytetiCurrent { get; set; }

        [Required]
        public int ZipKodiCurrent { get; set; }

        [Required]
        public string ShtetiCurrent { get; set; }

        public string Pershkrimi { get; set; }

        public string LinkedIn { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Roli { get; set; }

        [Required]
        public string Username { get; set; }
    }
}