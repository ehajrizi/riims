using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly TokenService _tokenService;

        public AccountController(UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager,
                                TokenService tokenService)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized();

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
            {
                return CreateUserObject(user);
            }

            return Unauthorized();
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
            {
                ModelState.AddModelError("email", "Email taken");
                return ValidationProblem();
            }
            if (await _userManager.Users.AnyAsync(x => x.UserName == registerDto.Username))
            {
                ModelState.AddModelError("username", "Username taken");
                return ValidationProblem();
            }

            var user = new AppUser
            {
                Emri = registerDto.Emri,
                Mbiemri = registerDto.Mbiemri,
                EmriMesem = registerDto.EmriMesem,
                Gjinia = registerDto.Gjinia,
                UserName = registerDto.Username,
                Email = registerDto.Email,
                TitulliShkencor = registerDto.TitulliShkencor,
                Roli = registerDto.Roli,
                Datelindja = registerDto.Datelindja,
                Vendlindja = registerDto.Vendlindja,
                ShtetiLindjes = registerDto.ShtetiLindjes,
                RrugaCurrent = registerDto.RrugaCurrent,
                QytetiCurrent = registerDto.QytetiCurrent,
                ZipKodiCurrent = registerDto.ZipKodiCurrent,
                ShtetiCurrent = registerDto.ShtetiCurrent,
                Pershkrimi = registerDto.Pershkrimi,
                LinkedIn = registerDto.LinkedIn,
                PhoneNumber = registerDto.PhoneNumber,
            };


            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded)
            {
                return CreateUserObject(user);
            }

            return BadRequest("Problem registering user");

        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<UserDto>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreateUserObject(user);
        }

        private UserDto CreateUserObject(AppUser user)
        {
            return new UserDto
            {
                Emri = user.Emri,
                Mbiemri = user.Mbiemri,
                Token = _tokenService.CreateToken(user),
                Image = null,
                EmriMesem = user.EmriMesem,
                Gjinia = user.Gjinia,
                TitulliShkencor = user.TitulliShkencor,
                Roli = user.Roli,
                Datelindja = user.Datelindja,
                Vendlindja = user.Vendlindja,
                ShtetiLindjes = user.ShtetiLindjes,
                RrugaCurrent = user.RrugaCurrent,
                QytetiCurrent = user.QytetiCurrent,
                ZipKodiCurrent = user.ZipKodiCurrent,
                ShtetiCurrent = user.ShtetiCurrent,
                Pershkrimi = user.Pershkrimi,
                LinkedIn = user.LinkedIn,
                PhoneNumber = user.PhoneNumber
            };
        }
    }
}