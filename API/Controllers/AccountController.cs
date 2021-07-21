using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
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
        private readonly IUserRepository _userRepository;

        public AccountController(UserManager<AppUser> userManager,
                                SignInManager<AppUser> signInManager,
                                TokenService tokenService, IUserRepository userRepository)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
            _userRepository = userRepository;
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
            var user = await _userManager.FindByIdAsync(User.FindFirstValue(ClaimTypes.NameIdentifier));

            return CreateUserObject(user);
        }

        [Authorize]
        [HttpGet("{email}")]
        public async Task<ActionResult<AppUser>> GetUser(string email)
        {
            try
            {
                var result = await _userRepository.GetUser(email);

                if (result == null) return NotFound();

                return result;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }

        // [Authorize]
        [HttpGet("users")]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            try
            {
                return (await _userRepository.GetUsers()).ToList(); 
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, 
					"Error retrieving data from the database");
            }
        }

        [Authorize]
        [HttpPut("{email}")]
        public async Task<ActionResult<AppUser>> UpdateUser(string email, AppUser user)
        {
            try
            {
                if (email != user.Email)
                    return BadRequest("User Email mismatch");

                var userToUpdate = await _userRepository.GetUser(email);

                if (userToUpdate == null)
                    return NotFound($"User with Email = {email} not found");

                return await _userRepository.UpdateUser(user);

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating data");
            }
        }

        // [Authorize]
        [HttpDelete("{email}")]
        public async Task<IActionResult> DeleteUser(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if(user == null){
                return NotFound();
            }
            else{
                 var result = await _userManager.DeleteAsync(user);
                 if(result.Succeeded){
                     return RedirectToAction("GetUsers");
                 }
            }
            return ViewComponent("GetUsers");
        }
        private IActionResult ViewComponent(string v)
        {
            throw new NotImplementedException();
        }
    
        private UserDto CreateUserObject(AppUser user)
        {
            return new UserDto
            {
                Id = user.Id,
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