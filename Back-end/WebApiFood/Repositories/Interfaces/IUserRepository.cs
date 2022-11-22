using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetById(int id);
        Task<User> GetByName(string name);
    }
}
