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
            User? user = await _contex.Users.Include(x=>x.customer)
                                            .Include(y=>y.Seller).FirstOrDefaultAsync(x => x.Id == id);
            return user;
        }

        public async Task<Customer> GetByIdCustomer(int id)
        {
           return await _contex.Customers.Include(x => x.User).Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Seller> GetByIdSeller(int id)
        {
            return await _contex.Sellers.Include(x => x.User).Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<User?> GetByName(string name)
        {
            var user = await _contex.Users.FirstOrDefaultAsync(x => x.Email == name);
            return user;
        }

        public Task<Seller> GetByUserId(int idUser)
        {
            var seller = _contex.Sellers.Where(x=>x.UserId==idUser).FirstOrDefaultAsync();
            return seller;
        }

        public Task<Customer> GetCustomerByUserId(int idUser)
        {
            var customer = _contex.Customers.Where(x => x.UserId == idUser).FirstOrDefaultAsync();
            return customer;
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
