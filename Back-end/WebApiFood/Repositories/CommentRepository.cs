using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class CommentRepository : ICommentRepository
    {
        private readonly AppDbContext _contex;
        public CommentRepository(AppDbContext contex)
        {
            _contex = contex;
        }
        public Task<IEnumerable<Comment>> GetByDhis()
        {
            throw new NotImplementedException();
        }
    }
}
