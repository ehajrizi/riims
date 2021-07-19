
using DatabaseLogic;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace API
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<AppUser> _userManager;

        private readonly DataContext _context;

        public UserRepository(UserManager<AppUser> userManager, DataContext context)
        {
            this._userManager = userManager;
            _context = context;
        }

        // public async Task<AppUser> AddUser(AppUser user)
        // {
        //     // var result = await appDbContext.Employees.AddAsync(employee);
        //     var result = await _context.Users.AddAsync(user);
        //     await _context.SaveChangesAsync();
        //     return result.Entity;
        // }

        public async Task<IEnumerable<AppUser>> GetUsers()
        {
            return await _userManager.Users.ToListAsync();
        }

        public async Task<AppUser> GetUser(string Email)
        {
            return await _userManager.Users
                .FirstOrDefaultAsync(e => e.Email == Email);
        }

        public async Task<AppUser> UpdateUser(AppUser user)
        {
            var result = await _userManager.Users
                .FirstOrDefaultAsync(e => e.Email == user.Email);

            if (result != null)
            {
                result.Emri = user.Emri;
                result.EmriMesem = user.EmriMesem;
                result.Mbiemri = user.Mbiemri;
                result.Gjinia = user.Gjinia;
                result.Datelindja = user.Datelindja;
                result.Vendlindja = user.Vendlindja;
                result.ShtetiLindjes = user.ShtetiLindjes;
                result.TitulliShkencor = user.TitulliShkencor;
                result.RrugaCurrent = user.RrugaCurrent;
                result.QytetiCurrent = user.QytetiCurrent;
                result.ZipKodiCurrent = user.ZipKodiCurrent;
                result.ShtetiCurrent = user.ShtetiCurrent;
                result.Roli = user.Roli;
                result.Pershkrimi = user.Pershkrimi;
                result.PhoneNumber = user.PhoneNumber;
                result.UserName = user.UserName;
                result.Id = user.Id;

                await _context.SaveChangesAsync();
                return result;
            }

            return null;
        }

        public async Task<IEnumerable<AppUser>> Search(string emri)
    {
        IQueryable<AppUser> query = _userManager.Users;
            
        if (!string.IsNullOrEmpty(emri))
        {
            query = query.Where(e => e.Emri.Contains(emri));
        }

        return await query.ToListAsync();
    }

        public async void DeleteUser(string Email)
        {
            var result = await _userManager.Users
                .FirstOrDefaultAsync(e => e.Email == Email);
            if (result != null)
            {
               await _userManager.DeleteAsync(result);
            }
        }
    }
}