using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetById(int id);
        Task<ICollection<User>> GetUsers();
        Task<User> GetByName(string name);
    }
}
