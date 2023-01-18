using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.CommentDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface ICommentBusiness
    {
        Task<Response<bool>> Create(RgCommentDto commentDto,int idUser);
        Task<bool> Update(User Entity);
        Task<IEnumerable<User>> GetAll();
        Task<User> GetById(int id);
        Task<Response<IEnumerable<GetCommentDto>>> GetByIdUser(int idUser);
        Task<bool> Delete(User Entity);
    }
}
