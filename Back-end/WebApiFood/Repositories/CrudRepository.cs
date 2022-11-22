using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class CrudRepository<T> : ICrudRepository<T> where T : class
    {
        private readonly AppDbContext _context;
        public CrudRepository(AppDbContext appDbContext )
        {
            _context = appDbContext;
        }
        public  Task Delete(T entity)
        {
             _context.Remove(entity);
            return Task.CompletedTask;
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            IEnumerable<T> valueT = await _context.Set<T>().ToListAsync();
            return valueT;
        }

        public async Task Insert(T entity)
        {
           await _context.AddAsync(entity);
        }

        public async Task<int> Save()
        {
            return await _context.SaveChangesAsync();
        }

        public  Task Update(T entity)
        {
             _context.Update(entity);
            return Task.CompletedTask;
        }
    }
}
