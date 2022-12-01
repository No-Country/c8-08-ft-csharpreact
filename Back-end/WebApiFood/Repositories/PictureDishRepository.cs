using Microsoft.EntityFrameworkCore;
using System.Linq;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class PictureDishRepository : IPictureDishRepository
    {
        private readonly AppDbContext _Context;
        public PictureDishRepository(AppDbContext context)
        {
            _Context = context;
        }

        public async Task<bool> DeletePictureDishById(int idEntity)
        {
            _Context.PictureDishes.RemoveRange(_Context.PictureDishes.Where(x=>x.DishId==idEntity));
            int code = await _Context.SaveChangesAsync();
            return code>=1 ? true : false;
        }

        public async Task<ICollection<PictureDish>> GetPictureDishById(int idEntity)
        {
            ICollection<PictureDish> pictureDishes = await _Context.PictureDishes.Where(x=>x.DishId==idEntity).ToListAsync();
            return pictureDishes;
        }
    }
}
