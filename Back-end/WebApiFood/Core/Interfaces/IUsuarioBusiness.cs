using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IUsuarioBusiness
    {
        Task<Response<bool>> Create(RgCustomerDto rgCustomerDto);
        Task<bool> Update(User Entity);
        Task<IEnumerable<User>> GetAll();
        Task<User> GetById(int id);
        Task<bool> Delete(User Entity);

    }
}
