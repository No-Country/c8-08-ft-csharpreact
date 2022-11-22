using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IBusinessRepository
    {
        Task<Busines> GetById(int id);
        Task<Busines> GetByName(string name);
    }
}
