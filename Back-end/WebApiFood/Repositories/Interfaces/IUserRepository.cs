using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetById(int id);
        Task<ICollection<User>> GetUsers();
        Task<User> GetByName(string name);
        Task<Seller> GetByIdSeller(int id);
        Task<Seller> GetByUserId(int idUser);
        Task<Customer> GetCustomerByUserId(int idUser);
        Task<Customer> GetByIdCustomer(int id);
       
    }
}
