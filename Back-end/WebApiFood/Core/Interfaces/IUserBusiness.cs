using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.UserDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IUserBusiness
    {
        Task<Response<User>> GetById(int id);
        Task<Response<ICollection<GetUserDto>>> GetUsers();
        Task<User> GetByName(string name);
        Task<Response<SellerDto>> GetByIdSeller(int id);
        Task<Response<CustomerDto>> GetByIdCustomer(int id);

    }
}
