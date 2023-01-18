using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.CommentDtos;
using WebApiFood.Core.Models.Dtos.DishDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IDishBusiness
    {
        Task<Response<bool>> Create(RgDishDto rgDishDto);
        Task<Response<IEnumerable<GetDishDto>>> GetAllDish(int idBus);
        Task<Response<IEnumerable<GetCommentDto>>> GetAllCommentByDish(int idDish);
        Task<Response<bool>> Update(int idEntity,UpdateDto entityDto);
        Task<IEnumerable<User>> GetAll();
        Task<User> GetById(int id);
        Task<Response<bool>> Delete(int  IdEntity);
    }
}
