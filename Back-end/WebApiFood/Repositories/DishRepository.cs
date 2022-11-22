using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class DishRepository : IDishRepository
    {
        private AppDbContext _context;
        public DishRepository(AppDbContext contex)
        {
            _context = contex;
        }
        public async Task<Dish> GetById(int id)
        {
            return await _context.Dishes.FirstOrDefaultAsync(x=>x.Id==id);
           
        }

        public async Task<Dish> GetByName(string name)
        {
            return await _context.Dishes.FirstOrDefaultAsync(x => x.Name == name);
        }
    }
}
