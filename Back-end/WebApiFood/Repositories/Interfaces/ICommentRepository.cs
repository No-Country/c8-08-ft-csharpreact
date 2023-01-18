using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface ICommentRepository
    {
        Task<IEnumerable<Comment>> GetByDhis();
        Task<IEnumerable<Comment>> GetByUser(int idUser);
    }
}
