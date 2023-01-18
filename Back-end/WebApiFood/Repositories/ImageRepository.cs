using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class ImageRepository : IImageRepository
    {
        private readonly AppDbContext _context;
        public ImageRepository(AppDbContext appDbContext)
        {
            _context = appDbContext;
        }
        public async Task<PictureBusiness> GetPictureBusinesId(int id)
        {
            return await _context.PicturesBusiness.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<PictureDish> GetPictureDishId(int id)
        {
            return await _context.PictureDishes.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}
