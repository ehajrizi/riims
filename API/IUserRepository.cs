using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;

public interface IUserRepository
{
    Task<IEnumerable<AppUser>> GetUsers();
    Task<AppUser> GetUser(string Email);
    // Task<AppUser> AddUser(AppUser user);
    Task<AppUser> UpdateUser(AppUser user);
    void DeleteUser(string Email);
}