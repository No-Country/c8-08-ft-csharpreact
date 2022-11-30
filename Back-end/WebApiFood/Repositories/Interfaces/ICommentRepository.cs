using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface ICommentRepository
    {
        Task<IEnumerable<Comment>> GetByDhis();
    }
}
