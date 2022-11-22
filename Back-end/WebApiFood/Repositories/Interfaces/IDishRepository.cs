using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IDishRepository
    {
        Task<Dish> GetById(int id);
        Task<Dish> GetByName(string name);
    }
}
