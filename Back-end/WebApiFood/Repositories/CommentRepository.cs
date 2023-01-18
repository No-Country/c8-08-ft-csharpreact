using Microsoft.EntityFrameworkCore;
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
        /// <summary>
        /// obtener todos los comentarios por Usuario
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public async Task<IEnumerable<Comment>> GetByUser(int idUser)
        {
            IEnumerable<Comment> comments = await _contex.Comments.Where(x => x.UserId == idUser).ToListAsync();
            return comments;
        }
    }
}
