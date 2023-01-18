using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IImageBusiness
    {
        Task<Response<bool>> DeleteDish(int id);
        Task<Response<bool>> DeleteBusiness(int id);
    }
}
