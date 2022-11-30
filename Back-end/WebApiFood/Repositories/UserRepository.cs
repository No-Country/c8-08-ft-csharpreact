using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
using System.Linq;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _contex;
        public UserRepository(AppDbContext contex)
        {
            _contex = contex;
        }
        
        public  async Task<User?> GetById(int id)
        {  
            User? user = await _contex.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<User?> GetByName(string name)
        {
            var user = await _contex.Users.FirstOrDefaultAsync(x => x.Email == name);
            return user;
        }

        public async Task<ICollection<User>> GetUsers()
        {
            ICollection<User> user = await _contex.Users.Select(u => new User
            {
                Id = u.Id,
                Activo = u.Activo,
                Create = u.Create,
                Email = u.Email,
                Password = u.Password,
                Role = u.Role,
                Update = u.Update,
                RoleId = u.RoleId,
            }).ToListAsync();                                                           
            return  user;
        }
    }
}
