using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IBusinessRepository
    {
        Task<ICollection<Busines>> GetAllAsyncByUser(int id);
        Task<ICollection<Busines>> GetAllAsyncBusiness();
        Task<ICollection<Busines>> GetBusinesByPagination();
        Task<Busines> GetById(int idUser);
        Task<Busines> GetByName(string name);
        Task<Busines> GetByIdUser(int idUser);
    }
}
