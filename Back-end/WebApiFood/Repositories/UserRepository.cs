using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
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

        public  async Task<User> GetById(int id)
        {  
            User user = await _contex.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<User> GetByName(string name)
        {
            User user = await _contex.Users.FirstOrDefaultAsync(x => x.Email == name);
            return user;
        }
    }
}
