using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;
using System.Linq;

namespace WebApiFood.Repositories
{
    public class DishRepository : IDishRepository
    {
        private AppDbContext _context;
        public DishRepository(AppDbContext contex)
        {
            _context = contex;
        }
        /// <summary>
        /// returnar todos los platos por negocio
        /// </summary>
        /// <param name="idBus"></param>
        /// <returns></returns>
        public async Task<IEnumerable<Dish>> GetAllByBusiness(int idBus)
        {
            IEnumerable<Dish> dishes = await _context.Dishes.Include(x => x.ScoreDish)
                                                            .Include(x => x.PictureDishes)
                                                            .Where(x=>x.BusinessId==idBus).ToListAsync();
            //var d = from dish in dishes select dish.ScoreDish.Count;
            return dishes;
        }
        /// <summary>
        /// retorna todos los comentarios por id del plato
        /// </summary>
        /// <param name="idDish"></param>
        /// <returns></returns>
        public async Task<ICollection<Comment>> GetAllBydish(int idDish)
        {

              var commets = await _context.Dishes.Where(x=>x.Id ==idDish).Select(x=>x.Comments).SingleAsync();
            return commets;
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
